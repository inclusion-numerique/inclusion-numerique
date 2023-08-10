import { redirect } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import PublicFooter from '@app/web/app/(public)/PublicFooter'
import { getSessionUser } from '@app/web/auth/getSessionUser'
import Header from '@app/web/components/Header'

export const dynamic = 'force-dynamic'

const PrivateLayout = async ({ children }: PropsWithChildren) => {
  const user = await getSessionUser()
  if (!user) {
    redirect('/connexion')
    return null
  }
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}
    >
      <Header user={user} />
      <div style={{ flex: 1 }}>{children}</div>
      <PublicFooter />
    </div>
  )
}

export default PrivateLayout
