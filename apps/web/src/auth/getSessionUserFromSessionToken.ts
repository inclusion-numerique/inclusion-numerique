import type { Prisma } from '@prisma/client'
import { SessionUser } from '@app/web/auth/sessionUser'
import { prismaClient } from '@app/web/prismaClient'

export const sessionUserSelect = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  name: true,
  emailVerified: true,
  image: true,
  title: true,
  role: true,
  roleScope: true,
  gouvernancePersona: true,
  // Only get current form if it was not canceled
  formulaireGouvernance: {
    where: {
      annulation: null,
    },
    select: {
      id: true,
      gouvernancePersona: true,
    },
  },
  location: true,
  description: true,
  created: true,
  updated: true,
} as const satisfies Prisma.UserSelect

export const getSessionUserFromSessionToken = async (
  sessionToken: string | null,
): Promise<SessionUser | null> => {
  if (!sessionToken) {
    return null
  }

  const res = await prismaClient.session.findFirst({
    where: {
      sessionToken,
      expires: { gt: new Date() },
    },
    include: {
      user: {
        select: sessionUserSelect,
      },
    },
  })

  if (!res?.user) {
    return null
  }

  return {
    ...res.user,
    created: res.user.created.toISOString(),
    updated: res.user.updated.toISOString(),
    emailVerified: res.user.emailVerified?.toISOString() ?? null,
  }
}
