import { notFound, redirect } from 'next/navigation'
import React from 'react'
import { getSessionUser } from '@app/web/auth/getSessionUser'
import Cartographie from '@app/web/components/Prefet/Cartographie/Page'
import { getDepartmentGeoJSON } from '@app/web/utils/map/geom'
import { getSections } from '@app/web/utils/map/section'

const Page = async () => {
  const user = await getSessionUser()
  const geoJSON = getDepartmentGeoJSON()
  const section = await getSections()
  if (!user) {
    redirect('/connexion?suivant=/prefet')
  }

  if (!geoJSON) {
    notFound()
  }

  return (
    <Cartographie
      user={user}
      bounds={geoJSON.bounds}
      cities={section.cities}
      epcis={section.epcis}
    />
  )
}

export default Page
