import type { User } from '@prisma/client'
import { GouvernancePersonaId } from '@app/web/app/(public)/gouvernance/gouvernancePersona'

export const sendGouvernanceWelcomeEmail = async ({
  user,
}: {
  user: User & { gouvernancePersona: GouvernancePersonaId }
}): Promise<true> => {
  console.log('Sending welcome email to', user.email)

  // TODO compute and send email
  // TODO mutate user by adding sent date
  await new Promise((resolve) =>
    // eslint-disable-next-line no-promise-executor-return
    setTimeout(() => {
      resolve(null)
    }, 1000),
  )
  return true
}

export const sendGouvernanceWelcomeEmailIfNeeded = ({ user }: { user: User }) =>
  !user.gouvernancePersona || user.gouvernanceSignupEmailSent
    ? Promise.resolve(false)
    : sendGouvernanceWelcomeEmail({
        user: user as User & { gouvernancePersona: GouvernancePersonaId },
      })
