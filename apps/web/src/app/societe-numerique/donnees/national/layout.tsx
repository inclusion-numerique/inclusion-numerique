import React, { PropsWithChildren } from 'react'
import Dashboard from '@app/web/components/Dashboard/Dashboard'
import { getDepartementOptions } from '@app/web/data/getDepartementOptions'
import SetLastVisitedGouvernanceScope from '@app/web/components/SetLastVisitedGouvernanceScope'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const NationalDataLayout = async ({ children }: PropsWithChildren) => {
  const departementOptions = await getDepartementOptions()

  return (
    <>
      <Dashboard
        national
        departementOptions={departementOptions}
        displayBreadcrumb={false}
      >
        {children}
      </Dashboard>
      <SetLastVisitedGouvernanceScope scope={{ national: true }} />
    </>
  )
}

export default NationalDataLayout
