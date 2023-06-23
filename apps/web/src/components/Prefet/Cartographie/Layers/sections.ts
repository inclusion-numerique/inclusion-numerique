import {
  FillLayerSpecification,
  LayerSpecification,
  LineLayerSpecification,
} from 'maplibre-gl'
import { communes, epcis } from './common'

export const lineLayer: LineLayerSpecification['paint'] = {
  'line-color': '#161616',
  'line-opacity': [
    'case',
    ['any', ['boolean', ['feature-state', 'hover'], false]],
    1,
    0.2,
  ],
}

export const fillLayer: FillLayerSpecification['paint'] = {
  'fill-color': '#161616',
  'fill-opacity': [
    'case',
    ['boolean', ['feature-state', 'hover'], false],
    0.08,
    0,
  ],
}

export const departementLayer: LineLayerSpecification = {
  id: 'departements',
  source: 'decoupage',
  'source-layer': 'departements',
  type: 'line',
  filter: ['==', ['get', 'code'], '08'],
  paint: { 'line-color': '#161616', 'line-width': 2 },
}

export const epcisLayer = (epcisCode: string[]): LayerSpecification => ({
  ...epcis,
  id: 'epcis',
  type: 'line',
  paint: lineLayer,
  filter: ['in', ['get', 'code'], ['literal', epcisCode]],
  layout: { visibility: 'none' },
})

export const epcisFilledLayer = (epcisCode: string[]): LayerSpecification => ({
  ...epcis,
  id: 'epcisFilled',
  type: 'fill',
  paint: fillLayer,
  filter: ['in', ['get', 'code'], ['literal', epcisCode]],
  layout: { visibility: 'none' },
})

export const communesLayer: LayerSpecification = {
  ...communes,
  id: 'communes',
  type: 'line',
  paint: lineLayer,
  layout: { visibility: 'none' },
}

export const communesFilledLayer: LayerSpecification = {
  ...communes,
  id: 'communesFilled',
  type: 'fill',
  paint: fillLayer,
  layout: { visibility: 'none' },
}

export const selectedCommunesLayer: LayerSpecification = {
  ...communes,
  id: 'selectedCommunes',
  type: 'line',
  paint: { 'line-color': '#161616' },
  filter: ['boolean', false],
  layout: { visibility: 'none' },
}

export const selectedCommunesFilledLayer: LayerSpecification = {
  ...communes,
  id: 'selectedCommunesFilled',
  type: 'fill',
  paint: { 'fill-color': '#161616', 'fill-opacity': 0.08 },
  filter: ['boolean', false],
  layout: { visibility: 'none' },
}
