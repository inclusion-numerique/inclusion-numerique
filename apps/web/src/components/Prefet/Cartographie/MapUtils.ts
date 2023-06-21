import {
  FillLayerSpecification,
  LayerSpecification,
  LineLayerSpecification,
  Map,
} from 'maplibre-gl'

export const epciMaxZoom = 9

export const departementLayer: LineLayerSpecification = {
  id: 'departements',
  source: 'decoupage',
  'source-layer': 'departements',
  type: 'line',
  filter: ['==', ['get', 'code'], '08'],
  paint: { 'line-color': '#161616', 'line-width': 2 },
}

const communes: Omit<
  LineLayerSpecification | FillLayerSpecification,
  'paint' | 'type' | 'id'
> = {
  source: 'decoupage',
  'source-layer': 'communes',
  minzoom: epciMaxZoom,
  filter: ['==', ['get', 'departement'], '08'],
}

const epcis: Omit<
  LineLayerSpecification | FillLayerSpecification,
  'paint' | 'type' | 'id'
> = {
  source: 'decoupage',
  'source-layer': 'epcis',
  maxzoom: epciMaxZoom,
}

const lineLayer: LineLayerSpecification['paint'] = {
  'line-color': '#161616',
  'line-opacity': [
    'case',
    ['any', ['boolean', ['feature-state', 'hover'], false]],
    1,
    0.2,
  ],
}

const fillLayer: FillLayerSpecification['paint'] = {
  'fill-color': '#161616',
  'fill-opacity': [
    'case',
    ['boolean', ['feature-state', 'hover'], false],
    0.08,
    0,
  ],
}

export const epcisLayer: LayerSpecification = {
  ...epcis,
  id: 'epcis',
  type: 'line',
  paint: lineLayer,
}

export const epcisFilledLayer: LayerSpecification = {
  ...epcis,
  id: 'epcisFilled',
  type: 'fill',
  paint: fillLayer,
}

export const communesLayer: LayerSpecification = {
  ...communes,
  id: 'communes',
  type: 'line',
  paint: lineLayer,
}

export const communesFilledLayer: LayerSpecification = {
  ...communes,
  id: 'communesFilled',
  type: 'fill',
  paint: fillLayer,
}

export const selectedCommunesLayer: LayerSpecification = {
  ...communes,
  id: 'selectedCommunes',
  type: 'line',
  paint: { 'line-color': '#161616' },
  filter: ['boolean', false],
}

export const selectedCommunesFilledLayer: LayerSpecification = {
  ...communes,
  id: 'selectedCommunesFilled',
  type: 'fill',
  paint: { 'fill-color': '#161616', 'fill-opacity': 0.08 },
  filter: ['boolean', false],
}

export const communesWithIndexLayer: LayerSpecification = {
  id: 'communes',
  type: 'fill',
  source: 'decoupage',
  'source-layer': 'communes',
  paint: {
    'fill-outline-color': 'white',
    'fill-opacity': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      1,
      0.7,
    ],
    'fill-color': [
      'case',
      ['<', ['length', ['get', 'nom']], 3],
      'red',
      ['<', ['length', ['get', 'nom']], 5],
      'yellow',
      ['<', ['length', ['get', 'nom']], 7],
      'blue',
      ['<', ['length', ['get', 'nom']], 9],
      'orange',
      'green',
    ],
  },
}

export const structuresCircleLayer: LayerSpecification = {
  id: 'structuresCircle',
  source: 'structures',
  type: 'circle',
  filter: ['!=', 'cluster', true],
  paint: {
    'circle-color': '#000091',
    'circle-stroke-color': 'white',
    'circle-stroke-width': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      3,
      0,
    ],
    'circle-radius': 13,
  },
}

export const structuresClusterSymbolLayer: LayerSpecification = {
  id: 'structuresClusterSymbol',
  source: 'structures',
  type: 'symbol',
  filter: ['==', 'cluster', true],
  layout: {
    'text-field': ['get', 'count'],
    'text-size': 18,
    'text-allow-overlap': true,
  },
  paint: {
    'text-color': 'white',
  },
}

export const structuresClusterCircleLayer: LayerSpecification = {
  id: 'structuresClusterCircle',
  source: 'structures',
  type: 'circle',
  filter: ['==', 'cluster', true],
  paint: {
    'circle-color': '#000091',
    'circle-radius': 20,
  },
}

const stateId: Record<string, string | number | undefined> = {}
const setState = (
  map: Map,
  source: string,
  layer: string | undefined,
  stateKey: string,
  key: string,
  value: boolean,
) => {
  if (stateId[stateKey] !== undefined) {
    map.setFeatureState(
      {
        source,
        id: stateId[stateKey],
        sourceLayer: layer,
      },
      { [key]: value },
    )
    if (!value) {
      stateId[stateKey] = undefined
    }
  }
}

export const addSelectedState = (
  map: Map,
  layer: string,
  selectedId?: string | number,
) => {
  setState(map, 'decoupage', layer, 'selected', 'selected', false)
  if (selectedId) {
    stateId.selected = selectedId
    setState(map, 'decoupage', layer, 'selected', 'selected', true)
  }
}

export const addHoverState = (
  map: Map,
  source: string,
  id: string,
  layer?: string,
) => {
  const key = `${source}-hover`
  map.on('mousemove', id, (event) => {
    if (map && event.features && event.features.length > 0) {
      // eslint-disable-next-line no-param-reassign
      map.getCanvas().style.cursor = 'pointer'
      setState(map, source, layer, key, 'hover', false)
      stateId[key] = event.features[0].id
      setState(map, source, layer, key, 'hover', true)
    }
  })

  map.on('mouseleave', id, () => {
    if (map) {
      setState(map, source, layer, key, 'hover', false)
    }
  })
}
