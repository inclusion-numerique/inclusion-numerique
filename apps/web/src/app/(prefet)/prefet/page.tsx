import { notFound, redirect } from 'next/navigation'
import React from 'react'
import { getSessionUser } from '@app/web/auth/getSessionUser'
import PrefetPage from '@app/web/components/Prefet/Page'
import { getDepartmentGeoJSON } from '@app/web/utils/map/geom'

const Page = async () => {
  const user = await getSessionUser()
  const geoJSON = getDepartmentGeoJSON('08')

  if (!user) {
    redirect('/connexion?suivant=/prefet')
  }

  if (!geoJSON) {
    notFound()
  }

  return <PrefetPage user={user} geoJSON={geoJSON} />
}

export default Page