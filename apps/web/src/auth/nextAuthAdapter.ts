import type { Adapter, AdapterAccount, AdapterUser } from '@auth/core/adapters'
import { PrismaAdapter } from '@auth/prisma-adapter'
import type { NextAuthOptions } from 'next-auth'
import { v4 } from 'uuid'
import { prismaClient } from '@app/web/prismaClient'
import { createUserData } from '@app/web/security/createUserData'
import type { MonCompteProProfile } from '@app/web/auth/MonCompteProProvider'
import { monCompteProConnectProviderId } from './monCompteProConnect'
/**
 * Ensuring that needed methods are defined when creating adapter
 */
const createAdapter = () => {
  const prismaAdapter = PrismaAdapter(prismaClient)

  const { createUser, deleteSession, linkAccount } = prismaAdapter

  if (!createUser) throw new Error('prismaAdapter.createUser is undefined')
  if (!deleteSession)
    throw new Error('prismaAdapter.deleteSession is undefined')
  if (!linkAccount) throw new Error('prismaAdapter.linkAccount is undefined')

  return {
    ...prismaAdapter,
    createUser,
    deleteSession,
    linkAccount,
  } satisfies Adapter
}

const prismaAdapter = createAdapter()

// ⚠️ Keycloak returns non standard fields that are expected to be ignored by the client
const removeNonStandardFields = <T extends AdapterAccount>(data: T): T => ({
  ...data,
  refresh_expires_in: undefined,
  'not-before-policy': undefined,
})

export const nextAuthAdapter: NextAuthOptions['adapter'] = {
  ...prismaAdapter,
  createUser: async (user) => {
    const { provider, ...rest } = user as Omit<AdapterUser, 'id'> & {
      // We pass the provider along from Keycloak provider to be able to detect if the user comes from Inclusion Connect
      provider?: typeof monCompteProConnectProviderId
    }
    const info = { id: v4(), ...rest }

    if (provider === monCompteProConnectProviderId) {
      // TODO Types are not great ... We should maybe override AdapterUser ?

      const userData = await createUserData(
        info as never as MonCompteProProfile & { id: string },
      )

      return prismaAdapter.createUser({
        ...userData,
        emailVerified: new Date(),
      })
    }
    return prismaAdapter.createUser(info)
  },
  // Better handle case of missing session when deleting. It should not crash auth process.
  deleteSession: async (sessionToken) => {
    try {
      await prismaAdapter.deleteSession(sessionToken)
    } catch (error) {
      // See https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
      if (
        !!error &&
        typeof error === 'object' &&
        'code' in error &&
        error.code === 'P2025'
      ) {
        // Ok, the session was already destroyed by another process
        return
      }
      throw error
    }
  },
  // Custom link acount
  linkAccount: (account) =>
    prismaAdapter.linkAccount(
      removeNonStandardFields(account as AdapterAccount),
    ),
}
