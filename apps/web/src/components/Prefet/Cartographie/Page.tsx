'use client'

import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { LngLatBoundsLike } from 'maplibre-gl'
import { SessionUser } from '@app/web/auth/sessionUser'
import { City } from '@app/web/types/City'
import styles from './Page.module.css'
import Legend from './Legend'
import Map from './Map'

const Cartographie = ({
  user,
  bounds,
}: {
  user: SessionUser
  bounds: LngLatBoundsLike
}) => {
  console.log(user)
  const [cities, setCities] = useState<City[]>([])
  const [selectedCity, setSelectedCity] = useState<City | null | undefined>()

  useEffect(() => {
    axios
      .get<City[]>(
        'https://geo.api.gouv.fr/departements/08/communes?fields=centre,population,codesPostaux',
      )
      .then(({ data }) => setCities(data))
      .catch((error) => console.error(error))
  }, [])

  const onCitySelected = useCallback(
    (city: string | undefined | null) => {
      if (city) {
        setSelectedCity(cities.find((c) => c.nom === city))
      } else {
        setSelectedCity(null)
      }
    },
    [cities],
  )

  return (
    <div className={styles.container}>
      <Legend cities={cities} setSelectedCity={setSelectedCity} />
      <Map
        bounds={bounds}
        selectedCity={selectedCity}
        onCitySelected={onCitySelected}
      />
    </div>
  )
}

export default Cartographie
