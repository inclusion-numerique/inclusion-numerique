'use client'

import React, { useCallback, useState } from 'react'
import { LngLatBoundsLike } from 'maplibre-gl'
import { SessionUser } from '@app/web/auth/sessionUser'
import { City, EPCI } from '@app/web/types/City'
import styles from './Page.module.css'
import Legend from './Legend'
import Map from './Map'

const Cartographie = ({
  user,
  bounds,
  cities,
  epcis,
}: {
  user: SessionUser
  bounds: LngLatBoundsLike
  cities: City[]
  epcis: EPCI[]
}) => {
  console.log(user)
  const [selectedCity, setSelectedCity] = useState<City | null | undefined>()

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
        epcis={epcis}
        cities={cities}
        selectedCity={selectedCity}
        onCitySelected={onCitySelected}
      />
    </div>
  )
}

export default Cartographie
