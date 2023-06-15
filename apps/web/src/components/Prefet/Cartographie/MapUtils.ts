import {
  FillLayerSpecification,
  LayerSpecification,
  LineLayerSpecification,
  Map,
} from 'maplibre-gl'

export const epciMaxZoom = 9

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
    ['boolean', ['feature-state', 'hover'], false],
    1,
    0.2,
  ],
}

const fillLayer: FillLayerSpecification['paint'] = {
  'fill-color': '#161616',
  'fill-opacity': [
    'case',
    ['boolean', ['feature-state', 'hover'], false],
    0.1,
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

let hoveredStateId: string | number | undefined
const setHoveringState = (map: Map, layer: string, hover: boolean) => {
  if (hoveredStateId) {
    map.setFeatureState(
      {
        source: 'decoupage',
        id: hoveredStateId,
        sourceLayer: layer,
      },
      { hover },
    )
    if (!hover) {
      hoveredStateId = undefined
    }
  }
}

export const addHoverState = (map: Map, id: string, layer: string) => {
  map.on('mousemove', id, (event) => {
    if (map && event.features && event.features.length > 0) {
      // eslint-disable-next-line no-param-reassign
      map.getCanvas().style.cursor = 'pointer'
      setHoveringState(map, layer, false)
      hoveredStateId = event.features[0].id
      setHoveringState(map, layer, true)
    }
  })

  map.on('mouseleave', id, () => {
    if (map) {
      setHoveringState(map, layer, false)
    }
  })
}
