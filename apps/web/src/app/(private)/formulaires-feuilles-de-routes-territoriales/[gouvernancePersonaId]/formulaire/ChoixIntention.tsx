'use client'

import { useRouter } from 'next/navigation'
import Alert from '@codegouvfr/react-dsfr/Alert'
import classNames from 'classnames'
import { useState } from 'react'
import Sentry from '@sentry/nextjs'
import { GouvernancePersona } from '@app/web/app/(public)/gouvernance/gouvernancePersona'
import WhiteCard from '@app/web/ui/WhiteCard'
import BackLink from '@app/web/components/BackLink'
import {
  linkToFormulaireGouvernanceParticiper,
  linkToFormulaireGouvernancePorter,
} from '@app/web/app/(private)/formulaires-feuilles-de-routes-territoriales/etapeFormulaireGouvernance'
import { withTrpc } from '@app/web/components/trpc/withTrpc'
import { trpc } from '@app/web/trpc'
import linkCardStyles from '@app/web/ui/LinkCard.module.css'
import { Spinner } from '@app/web/ui/Spinner'

const ChoixIntention = ({
  persona,
  formulaireGouvernance,
}: {
  persona: GouvernancePersona
  formulaireGouvernance: { id: string }
}) => {
  const router = useRouter()

  const [chosen, setChosen] = useState<'Participer' | 'Porter'>()

  const mutation = trpc.formulaireGouvernance.chooseIntention.useMutation()
  const onChoose = (intention: 'Participer' | 'Porter') => {
    setChosen(intention)
    mutation
      .mutateAsync({
        intention,
        formulaireGouvernanceId: formulaireGouvernance.id,
      })
      .then(() => {
        if (intention === 'Porter') {
          router.push(linkToFormulaireGouvernancePorter(persona.id))
        } else {
          router.push(linkToFormulaireGouvernanceParticiper(persona.id))
        }
        return null
      })
      .catch((error) => {
        console.error(error)
        Sentry.captureException(error)
      })
  }

  const disabled = mutation.isLoading || mutation.isSuccess

  return (
    <>
      {/* Le formulaire n'a pas "commencé", on peut retourner vers le choix de la persona */}
      <BackLink href="/formulaires-feuilles-de-routes-territoriales?changer=1" />
      <WhiteCard className="fr-mt-8v">
        <h2 className="fr-text-title--blue-france">{persona.title}</h2>
        <p className="fr-text--lg fr-mb-0 fr-mt-4v">{persona.cta}</p>
      </WhiteCard>
      {mutation.isError && (
        <Alert
          className="fr-my-6v"
          severity="error"
          small
          title="Votre choix n'a pas été enregistré"
          description={
            mutation.error?.message ||
            'Une erreur est survenue, veuillez réessayer ultérieurement.'
          }
        />
      )}
      <button
        className={classNames(linkCardStyles.card, 'fr-mt-6v')}
        type="button"
        onClick={() => onChoose('Porter')}
        disabled={disabled}
      >
        <div className={linkCardStyles.content}>
          <h3>Porter une feuille de route territoriale</h3>
          <p>
            Renseignez le périmètre de votre feuille de route (EPCI & communes
            participantes) ainsi que les éventuelles structures également
            impliquées.
          </p>
        </div>
        <div className={linkCardStyles.iconContainer}>
          {chosen === 'Porter' && disabled ? (
            <Spinner size="small" />
          ) : (
            <span className="fr-icon-arrow-right-line" />
          )}
        </div>
      </button>
      <button
        className={classNames(linkCardStyles.card, 'fr-mt-6v fr-mb-30v')}
        type="button"
        onClick={() => onChoose('Participer')}
        disabled={disabled}
      >
        <div className={linkCardStyles.content}>
          <h3>
            Participer à l’élaboration des feuilles de routes territoriales
          </h3>
          <p>
            En tant que participant, renseignez un/des contacts afin d’être
            sollicités à l’occasion des concertations territoriales.
          </p>
        </div>
        <div className={linkCardStyles.iconContainer}>
          {chosen === 'Participer' && disabled ? (
            <Spinner size="small" />
          ) : (
            <span className="fr-icon-arrow-right-line" />
          )}
        </div>
      </button>
    </>
  )
}

export default withTrpc(ChoixIntention)
