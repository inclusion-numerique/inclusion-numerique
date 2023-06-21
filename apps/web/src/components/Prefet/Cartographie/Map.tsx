'use client'

import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import maplibregl, {
  LngLatBoundsLike,
  Map as MapType,
  StyleSpecification,
} from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { City } from '@app/web/types/City'
import IndiceNumerique from './IndiceNumerique'
import {
  addHoverState,
  addSelectedState,
  communesFilledLayer,
  communesLayer,
  departementLayer,
  epciMaxZoom,
  epcisFilledLayer,
  epcisLayer,
  selectedCommunesFilledLayer,
  selectedCommunesLayer,
} from './MapUtils'
import MapPopup from './MapPopup'
import styles from './Map.module.css'
import { mapStyle } from './mapStyle'

const Map = ({
  bounds,
  selectedCity,
  onCitySelected,
}: {
  bounds: LngLatBoundsLike
  selectedCity?: City | null
  onCitySelected: (city: string | null | undefined) => void
}) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<MapType>()
  const [viewIndiceFN, setViewIndiceFN] = useState(true)
  const [division, setDivision] = useState('EPCI')

  useEffect(() => {
    if (map.current || !mapContainer.current) {
      return
    }

    map.current = new maplibregl.Map({
      attributionControl: false,
      container: mapContainer.current,
      style: mapStyle as StyleSpecification,
      minZoom: 8,
      maxZoom: 12.9,
    })

    map.current.on('load', () => {
      if (!map.current) {
        return
      }

      map.current.fitBounds(bounds, { padding: 20, animate: false })

      map.current.addSource('decoupage', {
        type: 'vector',
        tiles: [
          'https://openmaptiles.geo.data.gouv.fr/data/decoupage-administratif/{z}/{x}/{y}.pbf',
        ],
      })
      map.current.addLayer(departementLayer)
      map.current.addLayer(communesFilledLayer)
      map.current.addLayer(communesLayer)
      map.current.addLayer(selectedCommunesFilledLayer)
      map.current.addLayer(selectedCommunesLayer)
      map.current.addLayer(epcisFilledLayer)
      map.current.addLayer(epcisLayer)

      map.current.on('click', 'epcisFilled', (event) => {
        if (map.current) {
          map.current.flyTo({ zoom: epciMaxZoom + 1, center: event.lngLat })
        }
      })

      addHoverState(map.current, 'communesFilled', 'communes')
      addHoverState(map.current, 'epcisFilled', 'epcis')

      const navControl = new maplibregl.NavigationControl({
        showZoom: true,
        showCompass: false,
      })
      map.current.addControl(navControl, 'top-right')

      const scaleControl = new maplibregl.ScaleControl({
        maxWidth: 100,
        unit: 'metric',
      })
      map.current.addControl(scaleControl, 'bottom-left')

      map.current.on('zoom', () => {
        if (!map.current) {
          return
        }

        setDivision(map.current.getZoom() < epciMaxZoom ? 'EPCI' : 'Commune')
      })
    })
  }, [])

  useEffect(() => {
    if (map.current && map.current.isStyleLoaded()) {
      if (selectedCity) {
        map.current.flyTo({ center: selectedCity.centre.coordinates, zoom: 11 })
        map.current.setFilter('selectedCommunesFilled', [
          '==',
          ['get', 'nom'],
          selectedCity.nom,
        ])
        map.current.setFilter('selectedCommunes', [
          '==',
          ['get', 'nom'],
          selectedCity.nom,
        ])
      } else {
        map.current.setFilter('selectedCommunesFilled', ['boolean', false])
        map.current.setFilter('selectedCommunes', ['boolean', false])
      }
    }
  }, [map, selectedCity])

  useEffect(() => {
    if (map.current) {
      map.current.on('click', 'communesFilled', (event) => {
        if (map.current && event.features && event.features.length > 0) {
          addSelectedState(map.current, 'communes', event.features[0].id)
          onCitySelected(event.features[0].properties.nom as string)
        }
      })
    }
  }, [map, onCitySelected])

  return (
    <div className={styles.mapContainer}>
      <div ref={mapContainer} className={styles.map} data-testid="detailed-map">
        <div className="maplibregl-ctrl-bottom-right maplibregl-ctrl">
          <div
            className={classNames(
              styles.division,
              'maplibregl-ctrl',
              'maplibregl-ctrl-scale',
            )}
          >
            Découpage : {division}
          </div>
        </div>
      </div>
      {selectedCity && (
        <MapPopup
          city={selectedCity}
          close={() => {
            if (map.current) {
              addSelectedState(map.current, 'communes')
            }
            onCitySelected(null)
          }}
        />
      )}
      <IndiceNumerique
        setViewIndiceFN={setViewIndiceFN}
        viewIndiceFN={viewIndiceFN}
      />
    </div>
  )
}

export default Map
