import { LngLatLike } from 'maplibre-gl'

// from https://geo.api.gouv.fr/decoupage-administratif/communes
export type City = {
  nom: string
  code: string
  codesPostaux: string[]
  population: number
  centre: { type: 'Polygon'; coordinates: LngLatLike }
}
