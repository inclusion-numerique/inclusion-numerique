'use client'

import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import maplibregl, {
  GeoJSONFeature,
  LngLatBoundsLike,
  Map as MapType,
  StyleSpecification,
} from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import IndiceNumerique from './IndiceNumerique'
import {
  addHoverState,
  addSelectedState,
  communesFilledLayer,
  communesLayer,
  epciMaxZoom,
  epcisFilledLayer,
  epcisLayer,
} from './MapUtils'
import MapPopup from './MapPopup'
import styles from './Map.module.css'
import { mapStyle } from './mapStyle'

const Map = ({ bounds }: { bounds: LngLatBoundsLike }) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<MapType>()
  const [viewIndiceFN, setViewIndiceFN] = useState(true)
  const [division, setDivision] = useState('EPCI')
  const [clicked, setClicked] = useState<GeoJSONFeature['properties'] | null>()

  useEffect(() => {
    if (map.current || !mapContainer.current) {
      return
    }

    map.current = new maplibregl.Map({
      attributionControl: false,
      container: mapContainer.current,
      style: mapStyle as StyleSpecification,
      bounds,
      zoom: 8,
      minZoom: 8,
      maxZoom: 12.9,
    })

    map.current.on('load', () => {
      if (!map.current) {
        return
      }

      map.current.addSource('decoupage', {
        type: 'vector',
        tiles: [
          'https://openmaptiles.geo.data.gouv.fr/data/decoupage-administratif/{z}/{x}/{y}.pbf',
        ],
      })
      map.current.addLayer(communesFilledLayer)
      map.current.addLayer(communesLayer)
      map.current.addLayer(epcisFilledLayer)
      map.current.addLayer(epcisLayer)

      map.current.on('click', 'communesFilled', (event) => {
        if (map.current && event.features && event.features.length > 0) {
          addSelectedState(map.current, 'communes', event.features[0].id)
          setClicked({
            type: 'commune',
            ...event.features[0].properties,
          })
        }
      })
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

  return (
    <div className={styles.mapContainer}>
      <div ref={mapContainer} className={styles.map}>
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
      {clicked && (
        <MapPopup
          properties={clicked}
          close={() => {
            if (map.current) {
              addSelectedState(map.current, 'communes')
            }
            setClicked(null)
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
