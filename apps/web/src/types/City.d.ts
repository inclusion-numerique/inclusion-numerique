import { LngLatLike } from 'maplibre-gl'

// from https://geo.api.gouv.fr/decoupage-administratif/communes
// + ifn
export type City = {
  nom: string
  code: string
  codesPostaux: string[]
  codeEpci: string
  population: number
  centre: { type: 'Polygon'; coordinates: LngLatLike }
  ifn: number
}

export type EPCI = {
  code: string
  ifn: number
}

export type IFNResponse = Record<
  string,
  {
    score: {
      total: number
    }
  }
>
