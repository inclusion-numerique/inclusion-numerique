import { notFound, redirect } from 'next/navigation'
import React from 'react'
import { getSessionUser } from '@app/web/auth/getSessionUser'
import Cartographie from '@app/web/components/Prefet/Cartographie/Page'
import { getDepartmentInformations } from '@app/web/utils/map/departement'

const Page = async () => {
  const user = await getSessionUser()
  const departement = await getDepartmentInformations('08')
  if (!user) {
    redirect('/connexion?suivant=/prefet')
  }

  if (!departement) {
    notFound()
  }

  return (
    <Cartographie
      user={user}
      bounds={departement.geoJSON.bounds}
      cities={departement.cities}
      epcis={departement.epcis}
    />
  )
}

export default Page
