import React, { PropsWithChildren } from 'react'
import PublicFooter from '@app/web/app/(public)/PublicFooter'
import { getSessionUser } from '@app/web/auth/getSessionUser'
import Header from '@app/web/components/Header'

const PublicLayout = async ({ children }: PropsWithChildren) => {
  const user = await getSessionUser()
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}
    >
      <Header user={user} prefet />
      <div
        className="fr-container"
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        {children}
      </div>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
