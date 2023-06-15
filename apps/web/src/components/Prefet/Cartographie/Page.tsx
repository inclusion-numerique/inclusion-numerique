import React from 'react'
import { LngLatBoundsLike } from 'maplibre-gl'
import { SessionUser } from '@app/web/auth/sessionUser'
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
  return (
    <div className={styles.container}>
      <Legend />
      <Map bounds={bounds} />
    </div>
  )
}

export default Cartographie
