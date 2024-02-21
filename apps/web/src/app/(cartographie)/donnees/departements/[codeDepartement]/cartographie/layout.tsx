import React, { PropsWithChildren } from 'react'
import { notFound } from 'next/navigation'
import PublicFooter from '@app/web/app/(public)/PublicFooter'
import { getSessionUser } from '@app/web/auth/getSessionUser'
import Header from '@app/web/components/Header'
import { prismaClient } from '@app/web/prismaClient'

const CartographieDepartementLayout = async ({
  children,
  params: { codeDepartement },
}: PropsWithChildren<{
  params: { codeDepartement: string }
}>) => {
  const user = await getSessionUser()
  const department = await prismaClient.departement.findUnique({
    where: {
      code: codeDepartement,
    },
    select: { code: true, nom: true },
  })
  if (!department) {
    notFound()
    return null
  }
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}
    >
      <Header
        user={user}
        fullWidth
        backLink={`Retour aux données · ${department.nom}`}
        backLinkHref={`/donnees/departements/${department.code}`}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
      <PublicFooter />
    </div>
  )
}

export default CartographieDepartementLayout
