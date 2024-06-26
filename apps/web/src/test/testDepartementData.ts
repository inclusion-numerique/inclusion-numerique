import { LngLatBounds, LngLatBoundsLike } from 'maplibre-gl'
import { GeoJSONSourceSpecification } from '@maplibre/maplibre-gl-style-spec'
import { DepartementGeoFeatures } from '@app/web/data/departements'
import dataFile from './departements.json'

type JsonDataFeature = {
  type: 'Feature'
  geometry: {
    type: 'Polygon'
    coordinates: number[][][] | number[][][][]
  }
  properties: { DDEP_C_COD: string; DDEP_L_LIB: string }
}

const data = dataFile as {
  type: 'FeatureCollection'
  features: JsonDataFeature[]
}

/*
  Returns north East and south West coordinates.
 */
const getBounds = (
  coordinates: number[][][] | number[][][][],
): [[number, number], [number, number]] => {
  const bounds = new LngLatBounds()
  for (const coord of coordinates.flat()) {
    if (coord.length > 2) {
      for (const subCoord of coord as number[][]) {
        bounds.extend([subCoord[0], subCoord[1]])
      }
    } else {
      bounds.extend([coord[0] as number, coord[1] as number])
    }
  }

  return [
    bounds.getNorthEast().toArray(),
    bounds.getSouthWest().toArray(),
  ] satisfies LngLatBoundsLike
}

const constructIndexedDepartementGeoJson = () => {
  const departements = data.features.map((departementFeature) => {
    const bounds = getBounds(departementFeature.geometry.coordinates)

    const source = {
      type: 'geojson',
      data: departementFeature,
    } satisfies GeoJSONSourceSpecification

    return {
      code: departementFeature.properties.DDEP_C_COD,
      nom: departementFeature.properties.DDEP_L_LIB,
      bounds,
      source,
    }
  })

  const byCode = new Map(
    departements.map((departement) => [departement.code, departement]),
  )
  const byName = new Map(
    departements.map((departement) => [departement.nom, departement]),
  )

  return { departements, byCode, byName }
}

type IndexedDepartementsGeoJson = ReturnType<
  typeof constructIndexedDepartementGeoJson
>

let departementsGeoJson: IndexedDepartementsGeoJson

export const getDepartementGeoJson = (
  departement:
    | { code: string; name?: undefined }
    | { name: string; code?: undefined },
): DepartementGeoFeatures => {
  if (!departementsGeoJson) {
    departementsGeoJson = constructIndexedDepartementGeoJson()
  }

  const result =
    typeof departement.name === 'string'
      ? departementsGeoJson.byName.get(departement.name)
      : departementsGeoJson.byCode.get(departement.code)

  if (!result) {
    throw new Error('Departement not found')
  }

  return result
}

export const getDepartementCodes = (): string[] => {
  if (!departementsGeoJson) {
    departementsGeoJson = constructIndexedDepartementGeoJson()
  }

  return [...departementsGeoJson.byCode.keys()]
}
