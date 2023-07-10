export const structureTypes = [
  'association',
  'publique',
  'privee',
  'nonDefini',
] as const
export type StructureType = (typeof structureTypes)[number]

export const structureSubtypes = ['commune', 'epci', 'departement', 'autre']
export type StructureSubtype = (typeof structureSubtypes)[number]

export const structureSubtypeLabel: { [key in StructureSubtype]: string } = {
  commune: 'Commune',
  epci: 'EPCI',
  departement: 'Département',
  autre: 'Autre',
}
