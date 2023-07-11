import { LayerSpecification } from 'maplibre-gl'

export const structuresIconLayer: LayerSpecification = {
  id: 'structureIcon',
  source: 'structures',
  type: 'symbol',
  filter: ['!=', 'cluster', true],
  layout: {
    'icon-size': 0.5,
    'icon-allow-overlap': true,
    // https://maplibre.org/maplibre-style-spec/expressions/#case
    'icon-image': [
      'case',
      ['==', ['get', 'type'], 'publique'],
      'publique.png',

      ['==', ['get', 'type'], 'association'],
      'association.png',

      ['==', ['get', 'type'], 'privee'],
      'privee.png',

      'nonDefini.png',
    ],
  },
}

export const structuresCircleLayer: LayerSpecification = {
  id: 'structuresCircle',
  source: 'structures',
  type: 'circle',
  filter: ['!=', 'cluster', true],
  paint: {
    'circle-color': 'transparent',
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
