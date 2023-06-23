import { FillLayerSpecification, LineLayerSpecification } from 'maplibre-gl'

export const epciMaxZoom = 9

export const communes: Omit<
  LineLayerSpecification | FillLayerSpecification,
  'paint' | 'type' | 'id'
> = {
  source: 'decoupage',
  'source-layer': 'communes',
  minzoom: epciMaxZoom,
  filter: ['==', ['get', 'departement'], '08'],
}

export const epcis: Omit<
  LineLayerSpecification | FillLayerSpecification,
  'paint' | 'type' | 'id'
> = {
  source: 'decoupage',
  'source-layer': 'epcis',
  maxzoom: epciMaxZoom,
}
