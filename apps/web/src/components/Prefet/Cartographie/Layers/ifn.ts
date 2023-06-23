import { LayerSpecification } from 'maplibre-gl'
import { communes } from './common'

export const ifnColors = [
  'rgb(74, 107, 174)',
  'rgb(95, 142, 199)',
  'rgb(170, 196, 230)',
  'rgb(230, 222, 238)',
  'rgb(235, 181, 189)',
  'rgb(221, 116, 128)',
  'rgb(217, 92, 94)',
]

export const communesIFNLayer = (
  citiesByIndex: string[][],
): LayerSpecification => ({
  ...communes,
  id: 'communesIFN',
  type: 'line',
  paint: {
    'line-opacity': [
      'case',
      ['any', ['boolean', ['feature-state', 'hover'], false]],
      1,
      0,
    ],
    'line-width': 3,
    'line-color': [
      'case',
      ['any', ['boolean', ['feature-state', 'hover'], false]],
      [
        'case',
        ...ifnColors.flatMap((color, index) => [
          ['in', ['get', 'code'], ['literal', citiesByIndex[index]]],
          color,
        ]),
        'grey',
      ],
      'white',
    ],
  },
})

export const communesIFNFilledLayer = (
  citiesByIndex: string[][],
): LayerSpecification => ({
  ...communes,
  id: 'communesIFNFilled',
  type: 'fill',
  paint: {
    'fill-opacity': 0.7,
    'fill-color': [
      'case',
      ...ifnColors.flatMap((color, index) => [
        ['in', ['get', 'code'], ['literal', citiesByIndex[index]]],
        color,
      ]),
      'grey',
    ],
  },
})

export const selectedCommunesIFNLayer = (
  citiesByIndex: string[][],
): LayerSpecification => ({
  ...communes,
  id: 'selectedCommunesIFN',
  type: 'line',
  paint: {
    'line-width': 3,
    'line-color': [
      'case',
      ...ifnColors.flatMap((color, index) => [
        ['in', ['get', 'code'], ['literal', citiesByIndex[index]]],
        color,
      ]),
      'grey',
    ],
  },
  filter: ['boolean', false],
})
