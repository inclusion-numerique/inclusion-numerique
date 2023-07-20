import { readFile } from 'node:fs/promises'
import { getDataFilePath } from '@app/web/data/dataFiles'

export const ConumCoordinateurs = {
  url: 'https://api.conseiller-numerique.gouv.fr/coordinateurs',
  dataFile: '2023-07-20 - conum - coordinations.json',
}

export type ConumCoordinateur = {
  id: string
  prenom: string
  nom: string
  commune: string
  codePostal: string
  adresse: string
  courriel: string
  telephone: string
  perimetre: string
  nombreDePersonnesCoordonnees: number
  nombreDeStructuresAvecDesPersonnesCoordonnees: number
  dispositif: string
  latitude: number
  longitude: number
}

export const getConumCoordinateurs = async () => {
  const data = await readFile(
    getDataFilePath(ConumCoordinateurs.dataFile),
    'utf8',
  )

  return JSON.parse(data) as ConumCoordinateur[]
}
