import { readFile } from 'node:fs/promises'
import { DataInclusionStructure } from '@app/web/data/dataInclusionSchema'
import { getDataFilePath } from '@app/web/data/dataFiles'
import { mapStructuresBySiret } from '@app/web/data/siret'
import { mapStructuresByKey } from '@app/web/data/mapByKey'

export const CartoInclusionLieuxMediation = {
  schema: 'betagouv/data-inclusion-schema',
  url: 'https://www.data.gouv.fr/fr/datasets/lieux-de-mediation-numerique-sur-le-territoire-national-fournis-par-data-inclusion-1/',
  downloadUrl:
    'https://www.data.gouv.fr/fr/datasets/r/be3323ec-4662-4b3b-b90e-18cf5c97193d',
  dataFile: 'structures-inclusion-20230628-data-inclusion-sans-doublons.json',
}

export type CartoInclusionLieuxMediationStructure = DataInclusionStructure & {
  cnfsPermanenceId?: string
  aidantsConnectStructureId?: string
}

/**
 * Exemple mediation-numerique-conseiller-numerique-62ab017b8255a806e299c725-mediation-numerique
 * @param id
 */
const cnfsIdExtract = /conseiller-numerique-([\dA-Fa-f]+)-/

export const extractMetadataFromId = (id: string) => {
  const match = id.match(cnfsIdExtract)
  const cnfsPermanenceId = match ? match[1] : undefined

  return {
    cnfsPermanenceId,
  }
}

export const refineDataInclusionStructure = (
  structure: DataInclusionStructure,
): CartoInclusionLieuxMediationStructure => ({
  ...structure,
  ...extractMetadataFromId(structure.id),
})

export const getDataInclusionStructures = async () => {
  const data = await readFile(
    getDataFilePath(CartoInclusionLieuxMediation.dataFile),
    'utf8',
  )
  const structures = JSON.parse(data) as DataInclusionStructure[]
  return structures.map(refineDataInclusionStructure)
}

export const mapDataInclusionStructuresBySiret = (
  structures: CartoInclusionLieuxMediationStructure[],
) => mapStructuresBySiret(structures, 'siret')

export const mapDataInclusionStructuresByCnfsPermanenceId = (
  structures: CartoInclusionLieuxMediationStructure[],
) => mapStructuresByKey(structures, 'cnfsPermanenceId')

export const mapDataInclusionStructuresByAidantsConnectStructureId = (
  structures: CartoInclusionLieuxMediationStructure[],
) => mapStructuresByKey(structures, 'aidantsConnectStructureId')
