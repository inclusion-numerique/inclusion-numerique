import { output } from '@app/cli/output'
import axios from 'axios'
import type { Prisma } from '@prisma/client'
import { createCodePostalIndex } from '@app/web/data/getCommuneCode'
import { districts } from '@app/web/utils/map/districts'
import { prismaClient } from '@app/web/prismaClient'
import { BuildDepartementsOutput } from '@app/web/data/buildDatabase/buildDepartements'

export const buildCommunes = async ({
  departements,
  persist = true,
}: {
  departements: BuildDepartementsOutput
  persist?: boolean
}) => {
  output('-- Downloading from https://geo.api.gouv.fr...')

  const { data: communesGeoWithoutDistricts } = await axios.get<
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
  output('-- Preparing data...')

  const codePostaux: { code: string; codeCommune: string }[] = []

  const communesData: Prisma.CommuneCreateManyInput[] = []

  const codePostalIndex = createCodePostalIndex()

  for (const commune of communesGeoWithoutDistricts) {
    const arrondissements = districts[commune.nom.toLowerCase()]

    // We ignore departementCode for communes that are not registered in geo api (e.g. La Terre Adélie) code 984
    const codeDepartement =
      commune.codeDepartement === '984' ? null : commune.codeDepartement

    if (codeDepartement && !departements.codes.has(codeDepartement)) {
      console.error('Missing departement', commune)
      throw new Error('No departement for municipality')
    }

    // We add districts (arrondissements) for Paris, Lyon and Marseille, not the main commune
    if (arrondissements) {
      for (const arrondissement of arrondissements) {
        codePostaux.push({
          code: arrondissement.codesPostaux[0],
          codeCommune: arrondissement.code,
        })
        communesData.push({
          code: arrondissement.code,
          nom: arrondissement.nom,
          codeDepartement: commune.codeDepartement,
          population: arrondissement.population,
          codeEpci: commune.codeEpci,
          latitude: (arrondissement.centre.coordinates as [number, number])[0],
          longitude: (arrondissement.centre.coordinates as [number, number])[1],
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

    for (const codePostal of commune.codesPostaux) {
      codePostaux.push({
        code: codePostal,
        codeCommune: commune.code,
      })
      codePostalIndex.add(codePostal, indexInfo)
    }

    communesData.push({
      code: commune.code,
      nom: commune.nom,
      codeDepartement,
      population: commune.population ?? 0,
      codeEpci: commune.codeEpci,
      latitude: commune.centre.coordinates[0],
      longitude: commune.centre.coordinates[1],
    })
  }

  const uniqueCodePostaux = [
    ...new Set<string>(codePostaux.map(({ code }) => code)),
  ].map((code) => ({ code }))

  output('-- Inserting data...')

  if (persist) {
    await prismaClient.$transaction([
      prismaClient.codePostaux.deleteMany(),
      prismaClient.codePostal.deleteMany(),
      prismaClient.commune.deleteMany(),
      prismaClient.codePostal.createMany({ data: uniqueCodePostaux }),
      prismaClient.commune.createMany({
        data: communesData,
      }),
      prismaClient.codePostaux.createMany({ data: codePostaux }),
    ])
  }

  return {
    codes: new Set(communesData.map(({ code }) => code)),
    codePostalIndex,
  }
}

export type BuildCommunesOutput = Awaited<ReturnType<typeof buildCommunes>>
