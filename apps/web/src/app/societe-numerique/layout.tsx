import React, { PropsWithChildren } from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const LayoutWithMainNavigation = ({ children }: PropsWithChildren) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
    <div style={{ flex: 1 }}>{children}</div>
  </div>
)

export default LayoutWithMainNavigation
