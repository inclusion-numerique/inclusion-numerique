import {
  LngLatBounds,
  LngLatBoundsLike,
  SourceSpecification,
} from 'maplibre-gl'
import departments from './departements.json'

export type DepartmentGeoJSON = {
  bounds: LngLatBoundsLike
  source: SourceSpecification
}

const getBounds = (coordinates: number[][][]) =>
  coordinates
    .flat()
    .reduce(
      (accumulator, coord) =>
        accumulator.extend([coord[0], coord[1]]) as LngLatBounds,
      new LngLatBounds(),
    )

export const getDepartmentGeoJSON = (
  code: string,
): null | DepartmentGeoJSON => {
  const data = departments.features.find(
    (departement) => departement.properties.code === code,
  )
  if (!data) {
    return null
  }

  const bounds = getBounds(
    typeof data.geometry.coordinates[0][0][0] === 'number'
      ? (data.geometry.coordinates as number[][][])
      : (data.geometry.coordinates as number[][][][]).flat(),
  )

  return {
    bounds: [bounds.getNorthEast().toArray(), bounds.getSouthWest().toArray()],
    source: { type: 'geojson', data },
  }
}
