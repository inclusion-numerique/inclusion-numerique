import { notFound, redirect } from 'next/navigation'
import React from 'react'
import { getSessionUser } from '@app/web/auth/getSessionUser'
import Cartographie from '@app/web/components/Prefet/Cartographie/Page'
import { getDepartmentGeoJSON } from '@app/web/utils/map/geom'
import { getCities } from '@app/web/utils/map/cities'

const Page = async () => {
  const user = await getSessionUser()
  const geoJSON = getDepartmentGeoJSON()
  const cities = await getCities()
  if (!user) {
    redirect('/connexion?suivant=/prefet')
  }

  if (!geoJSON) {
    notFound()
  }

  return <Cartographie user={user} bounds={geoJSON.bounds} cities={cities} />
}

export default Page
