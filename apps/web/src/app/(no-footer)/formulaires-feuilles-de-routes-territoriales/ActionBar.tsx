'use client'

import { createModal } from '@codegouvfr/react-dsfr/Modal'
import { useRouter } from 'next/navigation'
import * as Sentry from '@sentry/nextjs'
import Button from '@codegouvfr/react-dsfr/Button'
import classNames from 'classnames'
import React, { PropsWithChildren, ReactNode } from 'react'
import { trpc } from '@app/web/trpc'
import PersistenceStateBadge from '@app/web/app/(no-footer)/formulaires-feuilles-de-routes-territoriales/PersistenceStateBadge'
import styles from './ActionBar.module.css'

const CancelModal = createModal({
  isOpenedByDefault: false,
  id: 'cancel-formulaire-gouvernance',
})

const SavedInformationModal = createModal({
  id: 'action-bar-saved-information',
  isOpenedByDefault: false,
})

const ActionBar = ({
  children,
  loading,
  autoSaving,
  formulaireGouvernanceId,
  skip,
  submitLabel,
}: PropsWithChildren<{
  autoSaving: boolean
  formulaireGouvernanceId: string
  loading: boolean
  skip?: ReactNode
  submitLabel?: string
}>) => {
  const mutation = trpc.formulaireGouvernance.annuler.useMutation()
  const router = useRouter()

  const onAnnulerFormulaire = () => {
    mutation
      .mutateAsync({ formulaireGouvernanceId })
      .then(() => {
        router.refresh()
        router.push('/')
        return null
      })
      .catch((error) => {
        // TODO Toast ?
        Sentry.captureException(error)
      })
  }

  const cancelLoading = mutation.isPending || mutation.isSuccess

  return (
    <>
      <div className={classNames(styles.container)}>
        <div className={classNames('fr-container', styles.content)}>
          <div className={styles.info}>
            {!!children && (
              <>
                <span data-testid="action-bar-info">{children}</span>
                <span className="fr-mx-1w fr-text--bold">·</span>
              </>
            )}
            <PersistenceStateBadge
              state={autoSaving ? 'saving' : 'saved'}
              openSavedInformationModal={SavedInformationModal.open}
            />
          </div>
          <div className={styles.buttons}>
            {!!skip && (
              <Button
                priority="tertiary no outline"
                data-testid="action-bar-skip"
                type="submit"
                className={loading ? 'fr-btn--loading' : undefined}
                disabled={autoSaving}
                nativeButtonProps={{
                  name: 'skip',
                }}
              >
                {skip}
              </Button>
            )}
            <Button
              priority="secondary"
              type="button"
              data-testid="action-bar-cancel"
              onClick={CancelModal.open}
              disabled={autoSaving || loading}
            >
              Effacer le formulaire
            </Button>

            <Button
              priority="primary"
              type="submit"
              className={loading ? 'fr-btn--loading' : undefined}
              disabled={autoSaving}
              data-testid="action-bar-submit"
              nativeButtonProps={{
                name: 'submit',
              }}
            >
              {submitLabel ?? 'Étape suivante'}
            </Button>
          </div>
        </div>
      </div>
      <SavedInformationModal.Component title="Enregistrement automatique">
        <p>
          Votre formulaire est enregistré automatiquement, vous pouvez quitter à
          tout moment et revenir le compléter plus tard.
        </p>
      </SavedInformationModal.Component>
      <CancelModal.Component
        title="Effacer le formulaire"
        buttons={[
          {
            type: 'button',
            priority: 'secondary',
            doClosesModal: true,
            children: 'Reprendre',
            disabled: cancelLoading,
          },
          {
            type: 'button',
            priority: 'primary',
            children: 'Effacer le formulaire',
            onClick: onAnnulerFormulaire,
            className: cancelLoading ? 'fr-btn--loading' : undefined,
          },
        ]}
      >
        Êtes-vous sur de vouloir effacer les données du formulaire&nbsp;? Toutes
        les informations déjà complétées seront supprimées.
      </CancelModal.Component>
    </>
  )
}

export default ActionBar
