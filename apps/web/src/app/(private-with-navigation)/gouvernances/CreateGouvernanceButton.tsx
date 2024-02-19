'use client'

import Button from '@codegouvfr/react-dsfr/Button'
import { useRouter } from 'next/navigation'
import { trpc } from '@app/web/trpc'
import {
  modifierBesoinsIngenieriePath,
  modifierGouvernancePath,
} from '@app/web/app/(private-with-navigation)/gouvernances/gouvernancePaths'
import { withTrpc } from '@app/web/components/trpc/withTrpc'

const CreateGouvernanceButton = ({
  nextAction,
  codeDepartement,
}: {
  nextAction: 'editGouvernance' | 'editBesoinsIngenierie'
  codeDepartement: string
}) => {
  const mutation = trpc.gouvernance.createGouvernance.useMutation()

  const router = useRouter()

  const onClick = async () => {
    const result = await mutation.mutateAsync({
      departementCode: codeDepartement,
    })

    const nextUrl =
      nextAction === 'editBesoinsIngenierie'
        ? modifierBesoinsIngenieriePath(
            { codeDepartement },
            { gouvernanceId: result.id, step: 'intro' },
          )
        : modifierGouvernancePath({ codeDepartement }, result.id)

    router.push(nextUrl)
  }

  return (
    <Button
      type="button"
      onClick={onClick}
      iconPosition="right"
      iconId="fr-icon-arrow-right-line"
      className={
        mutation.isPending || mutation.isSuccess ? 'fr-btn--loading' : ''
      }
    >
      Compléter
    </Button>
  )
}

export default withTrpc(CreateGouvernanceButton)
