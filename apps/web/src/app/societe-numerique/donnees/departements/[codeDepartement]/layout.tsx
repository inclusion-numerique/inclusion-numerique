import React, { PropsWithChildren } from 'react'
import Dashboard from '@app/web/components/Dashboard/Dashboard'
import { getDepartementOptions } from '@app/web/data/getDepartementOptions'
import { getDepartementNameAndCode } from '@app/web/data/getDepartementNameAndCode'
import SetLastVisitedGouvernanceScope from '@app/web/components/SetLastVisitedGouvernanceScope'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const DepartementDataLayout = async ({
  children,
  params: { codeDepartement },
}: PropsWithChildren<{
  params: { codeDepartement: string }
}>) => {
  const departement = await getDepartementNameAndCode(codeDepartement)
  const departementOptions = await getDepartementOptions()

  return (
    <>
      <Dashboard
        departement={departement}
        departementOptions={departementOptions}
        displayBreadcrumb={false}
      >
        {children}
      </Dashboard>
      <SetLastVisitedGouvernanceScope scope={{ codeDepartement }} />
    </>
  )
}

export default DepartementDataLayout
