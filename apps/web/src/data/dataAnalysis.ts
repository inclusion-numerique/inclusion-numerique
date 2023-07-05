import {
  getDataInclusionStructures,
  mapDataInclusionStructuresByCnfsPermanenceId,
  mapDataInclusionStructuresBySiret,
} from '@app/web/data/dataInclusion'
import {
  getCnfsStructures,
  mapCnfsStructuresBySiret,
} from '@app/web/data/cnfsStructures'
import {
  getAidantsConnectStructures,
  mapAidantsConnectStructuresBySiret,
} from '@app/web/data/aidantsConnectStructures'
import {
  CnfsAidant,
  getCnfsPermanences,
  mapCnfsPermanencesBySiret,
} from '@app/web/data/cnfsPermanences'

const valueToString = (value: number) => value.toLocaleString('fr-FR')
export const valueToPercentage = (value: number) =>
  `${value.toPrecision(2).toLocaleString()}%`

export const debugDataInclusion = async () => {
  const dataInclusionStructures = await getDataInclusionStructures()
  const dataInclusionInfo = mapDataInclusionStructuresBySiret(
    dataInclusionStructures,
  )
  const byCnfsPermanenceId = mapDataInclusionStructuresByCnfsPermanenceId(
    dataInclusionStructures,
  )
  const byAidantsConnectStructureId =
    mapDataInclusionStructuresByCnfsPermanenceId(dataInclusionStructures)

  const totalCount = dataInclusionStructures.length
  const totalCountWithSiret = dataInclusionInfo.bySiret.size

  let totalDuplicatedSirets = 0
  for (const duplicatedStructures of dataInclusionInfo.duplicatedSirets.values()) {
    totalDuplicatedSirets += duplicatedStructures.length
  }

  const totalMissingSiret = dataInclusionInfo.missingSiret.length

  return {
    structures: dataInclusionStructures,
    ...dataInclusionInfo,
    byCnfsPermanenceId,
    byAidantsConnectStructureId,
    totalCount,
    analysis: [
      {
        title: 'Nombre de structures inclusion',
        value: totalCount,
        stringify: valueToString,
      },
      {
        title: 'Nombre de structures inclusion avec SIRET',
        value: totalCountWithSiret,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de structures inclusion sans SIRET ⚠️',
        value: totalMissingSiret,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de structures inclusion doublon SIRET',
        value: totalDuplicatedSirets,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de structures non géolocalisées ⚠️',
        value: dataInclusionStructures.filter(
          ({ latitude, longitude }) => !latitude || !longitude,
        ).length,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de structures sans typologie ⚠️',
        value: dataInclusionStructures.filter(({ typologie }) => !typologie)
          .length,
        stringify: valueToString,
        percentage: totalCount,
      },
    ],
  }
}

export type DataInclusionDebug = Awaited<ReturnType<typeof debugDataInclusion>>

export const debugCnfsStructures = async (
  dataInclusionDebug: DataInclusionDebug,
) => {
  const cnfsStructures = await getCnfsStructures()
  const cnfsInfo = mapCnfsStructuresBySiret(cnfsStructures)
  const totalCount = cnfsStructures.length
  const totalCountWithSiret = cnfsInfo.bySiret.size

  let totalDuplicatedSirets = 0
  for (const duplicatedStructures of cnfsInfo.duplicatedSirets.values()) {
    totalDuplicatedSirets += duplicatedStructures.length
  }
  const totalMissingSiret = cnfsInfo.missingSiret.length

  const totalSiretZero = cnfsStructures.filter(
    ({ SIRET }) => SIRET === '00000000000000',
  ).length

  const withInclusionStructureSiret = [...cnfsInfo.bySiret.values()]
    .map((structure) => ({
      structure,
      dataInclusionStructure: dataInclusionDebug.bySiret.get(structure.SIRET),
    }))
    .filter(({ dataInclusionStructure }) => dataInclusionStructure)

  return {
    structures: cnfsStructures,
    ...cnfsInfo,
    analysis: [
      {
        title: 'Nombre de structures CNFS',
        value: totalCount,
        stringify: valueToString,
      },
      {
        title: 'Nombre de structures CNFS avec SIRET',
        value: totalCountWithSiret,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de structures CNFS sans SIRET',
        value: totalMissingSiret,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: '↳ Dont nombre de structures CNFS avec SIRET "000000000000"',
        value: totalSiretZero,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de structures CNFS doublon SIRET',
        value: totalDuplicatedSirets,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title:
          'Nombre de structures CNFS référencée par SIRET dans data inclusion',
        value: withInclusionStructureSiret.length,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title:
          'Nombre de structures CNFS non referencée par SIRET dans data inclusion ⚠️',
        value: totalCount - withInclusionStructureSiret.length,
        stringify: valueToString,
        percentage: totalCount,
      },
    ],
  }
}

export const debugCnfsPermanences = async (
  dataInclusionDebug: DataInclusionDebug,
) => {
  const cnfsPermanences = await getCnfsPermanences()
  const cnfsInfo = mapCnfsPermanencesBySiret(cnfsPermanences)
  const totalCount = cnfsPermanences.length
  const totalCountWithSiret = cnfsInfo.bySiret.size

  let totalDuplicatedSirets = 0
  for (const duplicatedPermanences of cnfsInfo.duplicatedSirets.values()) {
    totalDuplicatedSirets += duplicatedPermanences.length
  }
  const totalMissingSiret = cnfsInfo.missingSiret.length

  const totalSiretZero = cnfsPermanences.filter(
    ({ pivot }) => pivot === '00000000000000',
  ).length

  const withInclusionStructureSiret = [...cnfsInfo.bySiret.values()]
    .map((permanence) => ({
      permanence,
      dataInclusionStructure: dataInclusionDebug.bySiret.get(permanence.pivot),
    }))
    .filter(({ dataInclusionStructure }) => dataInclusionStructure)

  const withInclusionPermanenceId = cnfsPermanences
    .map((permanence) => ({
      permanence,
      dataInclusionStructure: dataInclusionDebug.byCnfsPermanenceId.byKey.get(
        permanence.id,
      ),
    }))
    .filter(({ dataInclusionStructure }) => dataInclusionStructure)

  const withoutInclusionPermanenceId = cnfsPermanences
    .map((permanence) => ({
      permanence,
      dataInclusionStructure: dataInclusionDebug.byCnfsPermanenceId.byKey.get(
        permanence.id,
      ),
    }))
    .filter(({ dataInclusionStructure }) => !dataInclusionStructure)

  const uniqueAidants = new Map<string, CnfsAidant>()
  let permanenceWithoutAidants = 0
  for (const permanence of cnfsPermanences) {
    if (!permanence.aidants) {
      permanenceWithoutAidants += 1
      continue
    }
    for (const aidant of permanence.aidants) {
      if (uniqueAidants.has(aidant.aidantId)) {
        continue
      }
      uniqueAidants.set(aidant.aidantId, aidant)
    }
  }

  return {
    permanences: cnfsPermanences,
    ...cnfsInfo,
    withoutInclusionPermanenceId,
    analysis: [
      {
        title: 'Nombre de permanences CNFS',
        value: totalCount,
        stringify: valueToString,
      },
      {
        title: 'Nombre de permanences CNFS avec SIRET',
        value: totalCountWithSiret,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de permanences CNFS sans SIRET',
        value: totalMissingSiret,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: '↳ Dont nombre de permanences CNFS avec SIRET "000000000000"',
        value: totalSiretZero,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de permanences CNFS doublon SIRET',
        value: totalDuplicatedSirets,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title:
          'Nombre de permanences CNFS référencée par SIRET dans data inclusion',
        value: withInclusionStructureSiret.length,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title:
          'Nombre de permanences CNFS non referencée par SIRET dans data inclusion ⚠️',
        value: totalCount - withInclusionStructureSiret.length,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title:
          'Nombre de permanences CNFS référencée par ID composite dans data inclusion',
        value: withInclusionPermanenceId.length,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title:
          'Nombre de permanences CNFS non referencée par  ID composite dans data inclusion ⚠️',
        value: totalCount - withInclusionPermanenceId.length,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: "Nombre d'aidants CNFS",
        value: uniqueAidants.size,
        stringify: valueToString,
      },
      {
        title: 'Nombre de permanences sans aidants CNFS',
        value: permanenceWithoutAidants,
        stringify: valueToString,
        percentage: totalCount,
      },
    ],
  }
}
export const debugAidantsConnectStructures = async (
  dataInclusionDebug: DataInclusionDebug,
) => {
  const aidantsConnectStructures = await getAidantsConnectStructures()
  const aidantsConnectInfo = mapAidantsConnectStructuresBySiret(
    aidantsConnectStructures,
  )

  const totalCount = aidantsConnectStructures.length
  const totalCountWithSiret = aidantsConnectInfo.bySiret.size

  let totalDuplicatedSirets = 0
  for (const duplicatedStructures of aidantsConnectInfo.duplicatedSirets.values()) {
    totalDuplicatedSirets += duplicatedStructures.length
  }
  const totalMissingSiret = aidantsConnectInfo.missingSiret.length

  const withInclusionStructure = [...aidantsConnectInfo.bySiret.values()]
    .map((structure) => ({
      structure,
      dataInclusionStructure: dataInclusionDebug.bySiret.get(structure.Siret),
    }))
    .filter(({ dataInclusionStructure }) => dataInclusionStructure)

  return {
    structures: aidantsConnectStructures,
    ...aidantsConnectInfo,
    analysis: [
      {
        title: 'Nombre de structures AIDANTSCONNECT',
        value: totalCount,
        stringify: valueToString,
      },
      {
        title: 'Nombre de structures AIDANTSCONNECT avec SIRET',
        value: totalCountWithSiret,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de structures AIDANTSCONNECT sans SIRET',
        value: totalMissingSiret,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title: 'Nombre de structures AIDANTSCONNECT doublon SIRET',
        value: totalDuplicatedSirets,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title:
          'Nombre de structures AIDANTSCONNECT référencée par SIRET dans data inclusion',
        value: withInclusionStructure.length,
        stringify: valueToString,
        percentage: totalCount,
      },
      {
        title:
          'Nombre de structures AIDANTSCONNECT non referencée par SIRET dans data inclusion ⚠️',
        value: totalCount - withInclusionStructure.length,
        stringify: valueToString,
        percentage: totalCount,
      },
    ],
  }
}
