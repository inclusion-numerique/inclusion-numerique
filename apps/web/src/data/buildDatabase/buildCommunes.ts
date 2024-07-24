import { output } from '@app/cli/output'
import axios from 'axios'
import type { Prisma } from '@prisma/client'
import { createCodePostalIndex } from '@app/web/data/getCommuneCode'
import { BuildDepartementsOutput } from '@app/web/data/buildDatabase/buildDepartements'
import { districts } from '@app/web/data/districts'
import { DomainDataForDataIntegrity } from '@app/web/data/buildDatabase/getDomainDataForDataIntegrity'
import { transformStringToSearchableString } from '@app/web/search/transformStringToSearchableString'
import { arrayToMap } from '@app/web/utils/arrayToMap'
import { parseCsvFileWithMapper } from '@app/web/data/parseCsvFile'
import { getDataFilePath } from '@app/web/data/dataFiles'

export const buildCommunes = async ({
  departements,
  domainData,
}: {
  departements: BuildDepartementsOutput
  domainData: DomainDataForDataIntegrity
}) => {
  output('-- Downloading from https://geo.api.gouv.fr...')

  const communesGeoWithoutDistricts = await axios
    .get<
      {
        nom: string
        code: string
        type: string
        centre: { type: 'Point'; coordinates: [number, number] }
        codeDepartement: string
        siren: string
        codeEpci: string
        codesPostaux: string[]
        population: number
      }[]
    >(
      'https://geo.api.gouv.fr/communes?fields=code,codeDepartement,centre,population,codesPostaux,codeEpci',
    )
    .then(({ data }) => arrayToMap(data, 'code'))

  output('-- Get Epts communes mapping for EPCIs overrides...')
  const communesEpt = await parseCsvFileWithMapper(
    getDataFilePath('ept-communes.csv'),
    (row: {
      CODGEO: string
      LIBGEO: string
      EPT: string
      LIBEPT: string
      DEP: string
    }) => ({
      code: row.CODGEO,
      nom: row.LIBGEO,
      epciCode: row.EPT,
    }),
  )
  const communesEptMap = new Map(
    communesEpt.map(({ code, epciCode }) => [code, epciCode]),
  )

  output(`-- Preparing data... (${communesGeoWithoutDistricts.size})`)

  const codesPostaux: { code: string; codeCommune: string }[] = []

  const codePostauxJoinToDelete: { code: string; codeCommune: string }[] = []
  const codePostauxJoinToCreate: { code: string; codeCommune: string }[] = []
  const communesData: Prisma.CommuneCreateManyInput[] = []

  const communeCodePostauxByCommuneCode = new Map<string, string[]>()

  const codePostalIndex = createCodePostalIndex()

  for (const commune of communesGeoWithoutDistricts.values()) {
    const arrondissements = districts[commune.nom.toLowerCase()]

    // We ignore departementCode for communes that are not registered in geo api (e.g. La Terre Adélie) code 984
    const codeDepartement =
      commune.codeDepartement === '984' || commune.codeDepartement === '978'
        ? null
        : commune.codeDepartement

    if (codeDepartement && !departements.codes.has(codeDepartement)) {
      console.error('Missing departement', commune)
      throw new Error('No departement for municipality')
    }

    // We add districts (arrondissements) for Paris, Lyon and Marseille, not the main commune
    if (arrondissements) {
      for (const arrondissement of arrondissements) {
        codesPostaux.push({
          code: arrondissement.codesPostaux[0],
          codeCommune: arrondissement.code,
        })
        communeCodePostauxByCommuneCode.set(arrondissement.code, [
          arrondissement.codesPostaux[0],
        ])

        const codeEpci =
          communesEptMap.get(arrondissement.code) ?? commune.codeEpci ?? null

        communesData.push({
          code: arrondissement.code,
          nom: arrondissement.nom,
          codeDepartement: commune.codeDepartement,
          population: arrondissement.population,
          codeEpci,
          latitude: (arrondissement.centre.coordinates as [number, number])[0],
          longitude: (arrondissement.centre.coordinates as [number, number])[1],
          searchable: transformStringToSearchableString(
            `${arrondissement.nom}${arrondissement.codesPostaux[0]}`,
          ),
        })
        codePostalIndex.add(arrondissement.codesPostaux[0], {
          code: arrondissement.code,
          nom: arrondissement.nom.toLowerCase(),
        })
      }

      continue
    }

    const indexInfo = {
      code: commune.code,
      nom: commune.nom.toLowerCase(),
    }

    const communeCodes: string[] = []
    communeCodePostauxByCommuneCode.set(commune.code, communeCodes)

    for (const codePostal of commune.codesPostaux) {
      codesPostaux.push({
        code: codePostal,
        codeCommune: commune.code,
      })
      communeCodes.push(codePostal)

      codePostalIndex.add(codePostal, indexInfo)
    }
    const codeEpci =
      communesEptMap.get(commune.code) ?? commune.codeEpci ?? null

    communesData.push({
      code: commune.code,
      nom: commune.nom,
      searchable: transformStringToSearchableString(
        `${commune.nom}${commune.codesPostaux.join('z')}`,
      ),
      codeDepartement,
      population: commune.population ?? 0,
      codeEpci,
      latitude: commune.centre ? commune.centre.coordinates[0] : null,
      longitude: commune.centre ? commune.centre.coordinates[1] : null,
    })
  }

  // First we check if rows need to be deleted
  const communesToDelete = new Set<string>()

  for (const existing of domainData.communes.values()) {
    if (!communeCodePostauxByCommuneCode.has(existing.code)) {
      communesToDelete.add(existing.code)
    }
  }

  const communesToCreate: Prisma.CommuneCreateManyInput[] = []
  const communesToUpdate: Prisma.CommuneUpdateArgs[] = []

  for (const commune of communesData) {
    const existing = domainData.communes.get(commune.code)
    const communeCodePostaux =
      communeCodePostauxByCommuneCode.get(commune.code)?.sort() ?? []

    if (!existing) {
      communesToCreate.push(commune)

      codePostauxJoinToCreate.push(
        ...communeCodePostaux.map((code) => ({
          code,
          codeCommune: commune.code,
        })),
      )
      continue
    }

    // Check if commune data is the same

    const unchangedCommuneData =
      existing.code === commune.code &&
      existing.nom === commune.nom &&
      existing.codeDepartement === commune.codeDepartement &&
      existing.codeEpci === commune.codeEpci &&
      existing.searchable === commune.searchable &&
      existing.latitude === commune.latitude &&
      existing.longitude === commune.longitude

    const existingCodePostaux = existing.codesPostaux
      .map(({ codePostal: { code } }) => code)
      .sort()

    for (const existingCodeJoin of existingCodePostaux) {
      if (!communeCodePostaux.includes(existingCodeJoin)) {
        codePostauxJoinToDelete.push({
          code: existingCodeJoin,
          codeCommune: commune.code,
        })
      }
    }

    for (const communeCodeJoin of communeCodePostaux) {
      if (!existingCodePostaux.includes(communeCodeJoin)) {
        codePostauxJoinToCreate.push({
          code: communeCodeJoin,
          codeCommune: commune.code,
        })
      }
    }

    if (unchangedCommuneData) {
      continue
    }

    communesToUpdate.push({
      select: { code: true },
      where: { code: commune.code },
      data: commune,
    })
  }

  const uniqueCodesPostauxSet = new Set<string>(
    codesPostaux.map(({ code }) => code),
  )
  const uniqueCodesPostaux = [...uniqueCodesPostauxSet.values()].map(
    (code) => ({ code }),
  )

  const codePostalToDelete = new Set<string>()
  for (const existing of domainData.codePostaux.values()) {
    if (!uniqueCodesPostauxSet.has(existing)) {
      codePostalToDelete.add(existing)
    }
  }
  const codePostalToCreate = [...uniqueCodesPostauxSet.values()]
    .filter((code) => !domainData.codePostaux.has(code))
    .map((code) => ({ code }))

  output(
    `-- ${communesToCreate.length} to create, ${communesToUpdate.length} to update, ${communesToDelete.size} to delete`,
  )

  output('-- Checking integrity...')
  const communeCodes = new Set(communesData.map(({ code }) => code))
  const missingCommuneCodesInFormulaires = domainData.formulaires.filter(
    ({ communeCode }) => !!communeCode && !communeCodes.has(communeCode),
  )

  if (missingCommuneCodesInFormulaires.length > 0) {
    console.warn(
      `Missing commune codes in formulaires: ${missingCommuneCodesInFormulaires
        .map(({ communeCode, id }) => `${id}: ${communeCode ?? 'null'}`)
        .join(', ')}`,
    )
  }

  const missingCommuneCodesInParticipants =
    domainData.communesParticipantes.filter(
      ({ communeCode }) => !communeCodes.has(communeCode),
    )

  if (missingCommuneCodesInParticipants.length > 0) {
    console.warn(
      `Missing commune codes in participants: ${missingCommuneCodesInParticipants
        .map(
          ({ communeCode, id, formulaireGouvernanceId }) =>
            `${formulaireGouvernanceId} / ${id}: ${communeCode ?? 'null'}`,
        )
        .join(', ')}`,
    )
  }

  return {
    codes: new Set(communesData.map(({ code }) => code)),
    codePostalIndex,
    codePostalData: uniqueCodesPostaux,
    communesData,
    codesPostauxData: codesPostaux,
    codePostauxJoinToDelete,
    codePostauxJoinToCreate,
    codePostalToDelete,
    codePostalToCreate,
    communesToDelete,
    communesToCreate,
    communesToUpdate,
  }
}

export type BuildCommunesOutput = Awaited<ReturnType<typeof buildCommunes>>
