'use client'

import { useForm } from 'react-hook-form'
import Button from '@codegouvfr/react-dsfr/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { buttonLoadingClassname } from '@app/ui/utils/buttonLoadingClassname'
import React, { useEffect, useState } from 'react'
import { createToast } from '@app/ui/toast/createToast'
import { useRouter } from 'next/navigation'
import SelectFormField from '@app/ui/components/Form/SelectFormField'
import { SelectOption } from '@app/ui/components/Form/utils/options'
import Notice from '@codegouvfr/react-dsfr/Notice'
import { createModal } from '@codegouvfr/react-dsfr/Modal'
import { createPortal } from 'react-dom'
import { withTrpc } from '@app/web/components/trpc/withTrpc'
import { trpc } from '@app/web/trpc'
import { applyZodValidationMutationErrorsToForm } from '@app/web/utils/applyZodValidationMutationErrorsToForm'
import {
  BeneficiaireSubventionFormationData,
  BeneficiaireSubventionFormationValidation,
} from '@app/web/gouvernance/DemandeDeSubvention'
import { numberToEuros } from '@app/web/utils/formatNumber'
import { dotationFormation202406 } from '@app/web/gouvernance/dotationFormation202406'
import InfoLabelValue from '@app/web/components/Gouvernance/InfoLabelValue'
import { dateAsDay } from '@app/web/utils/dateAsDay'
import { limiteDeploiementDeFeuillesDeRoute } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceMetadata'
import { isBrowser } from '@app/web/utils/isBrowser'
import FindMemberNotice from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/FindMemberNotice'

const { open, Component } = createModal({
  isOpenedByDefault: false,
  id: `valider_et_envoyer_formation`,
})

const BeneficiaireSubventionFormationForm = ({
  gouvernanceId,
  beneficiaireFormationMembreId,
  beneficiaireFormationMembreNom,
  beneficiaireDotationFormationValideEtEnvoye,
  beneficiaireDotationFormationAccepte,
  canEdit = true,
  canInstruct = false,
  hideHint = false,
  beneficiairesOptions,
  mustEditContextBeforeValidate,
}: {
  gouvernanceId: string
  beneficiaireFormationMembreId?: string | null
  beneficiaireFormationMembreNom?: string | null
  beneficiaireDotationFormationValideEtEnvoye?: string | null
  beneficiaireDotationFormationAccepte?: string | null
  beneficiairesOptions: SelectOption[]
  canEdit?: boolean
  canInstruct?: boolean
  hideHint?: boolean
  mustEditContextBeforeValidate: boolean
}) => {
  const [isEditing, setIsEditing] = useState(!beneficiaireFormationMembreId)

  const form = useForm<BeneficiaireSubventionFormationData>({
    resolver: zodResolver(BeneficiaireSubventionFormationValidation),
    defaultValues: {
      gouvernanceId,
      membreGouvernanceId: beneficiaireFormationMembreId ?? undefined,
    },
  })

  const validerEtEnvoyer =
    trpc.demandesDeSubvention.validerEtEnvoyerBeneficiaireFormation.useMutation()

  const accepter =
    trpc.demandesDeSubvention.accepterBeneficiaireFormation.useMutation()

  const demanderAModifier =
    trpc.demandesDeSubvention.demanderAModifierBeneficiaireFormation.useMutation()

  const router = useRouter()

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit = () => {
    open()
  }

  const onConfirm = async () => {
    const data = form.getValues()
    try {
      await validerEtEnvoyer.mutateAsync(data)
      createToast({
        priority: 'success',
        message: 'Le bénéficiaire de la dotation formation a bien été envoyé',
      })
      setIsEditing(false)
      router.refresh()
    } catch (mutationError) {
      if (
        applyZodValidationMutationErrorsToForm(mutationError, form.setError)
      ) {
        return
      }
      createToast({
        priority: 'error',
        message:
          'Une erreur est survenue lors de l’enregistrement du bénéficiaire',
      })
    }
  }

  const onAccepter = async () => {
    try {
      await accepter.mutateAsync({ id: gouvernanceId })
      createToast({
        priority: 'success',
        message: 'Le bénéficiaire de la dotation formation a bien été accepté',
      })
      setIsEditing(false)
      router.refresh()
    } catch {
      createToast({
        priority: 'error',
        message: 'Une erreur est survenue',
      })
    }
  }

  const onDemanderAModifier = async () => {
    try {
      await demanderAModifier.mutateAsync({ id: gouvernanceId })
      createToast({
        priority: 'success',
        message:
          'Le bénéficiaire de la dotation formation peut à nouveau être modifié',
      })
      setIsEditing(false)
      router.refresh()
    } catch {
      createToast({
        priority: 'error',
        message: 'Une erreur est survenue',
      })
    }
  }

  const isLoading =
    form.formState.isSubmitting ||
    validerEtEnvoyer.isPending ||
    accepter.isPending ||
    demanderAModifier.isPending

  const { error } = validerEtEnvoyer

  const [renderModal, setRenderModal] = useState(false)

  useEffect(() => {
    setRenderModal(isBrowser)
  }, [])

  const title = (
    <h2 className="fr-h5 fr-flex fr-mb-0 fr-justify-content-space-between fr-flex-gap-4v">
      <span>Dotation formation Aidants Numériques / Aidants Connect</span>
      <span>{numberToEuros(dotationFormation202406)}</span>
    </h2>
  )

  const hintContent = (
    <span className="fr-text--sm">
      Une dotation de 20 000 € est dédiée à la formation des professionnels du
      territoire.
      <br />
      <br />
      Cette dotation doit être fléchée vers un destinataire unique :
      <br />
      <ul>
        <li>
          Il est préconisé que le destinataire de ces fonds soit la collectivité
          co-porteuse de la gouvernance locale (Conseil Départemental notamment)
          ;
        </li>
        <li>
          A titre dérogatoire, ils pourront être fléchés vers un membre de la
          gouvernance, hors organismes de formation ;
        </li>
        <li>
          Les fonds doivent être destinés à la formation de professionnels
          non-conseillers numériques et non-affiliés à l’OPCO Uniformation ;
        </li>
        <li>
          Les professionnels formés peuvent appartenir à la structure qui
          perçoit et gère la dotation, ou à d’autres structures du territoire ;
        </li>
        <li>
          Ces crédits doivent permettre de financer la formation d’un minimum de
          60 professionnels ;
        </li>
        <li>
          Les formations financées peuvent porter sur les enjeux de l’inclusion
          numérique pour les aidants professionnels et/ou sur la formation à{' '}
          <a
            href="https://aidantsconnect.beta.gouv.fr"
            target="_blank"
            className="fr-link fr-link--sm"
          >
            Aidants Connect
          </a>{' '}
          ;
        </li>
        <li>
          Des informations détaillées sur la mise en œuvre de ces formations
          sont disponibles à cette{' '}
          <a
            href="https://lesbases.anct.gouv.fr/ressources/comment-financer-les-feuilles-de-routes"
            target="_blank"
            className="fr-link fr-link--sm"
          >
            adresse
          </a>
          .
        </li>
      </ul>
    </span>
  )

  if (!isEditing) {
    return (
      <>
        <div className="fr-flex fr-flex-gap-4v fr-align-items-center fr-justify-content-space-between fr-mb-2v">
          {title}
          {!!canEdit && (
            <Button
              type="button"
              priority="secondary"
              size="small"
              iconId="fr-icon-edit-line"
              onClick={() => {
                setIsEditing(true)
              }}
            >
              Modifier
            </Button>
          )}
        </div>
        {!hideHint && (
          <>
            <hr className="fr-separator-8v" />
            <div>{hintContent}</div>
          </>
        )}
        <hr className="fr-separator-8v" />
        <InfoLabelValue
          label="Bénéficiaire enregistré"
          value={beneficiaireFormationMembreNom}
        />
        {!!beneficiaireDotationFormationValideEtEnvoye &&
          !beneficiaireDotationFormationAccepte && (
            <Notice
              className="fr-mt-8v fr-notice--new fr-notice--no-icon"
              title={
                <span className="fr-flex fr-width-full fr-align-items-center fr-justify-content-space-between fr-flex-gap-4v">
                  <span>
                    En attente d’instruction depuis le{' '}
                    {beneficiaireDotationFormationValideEtEnvoye}.
                  </span>
                  {!!canInstruct && (
                    <span className="fr-flex fr-direction-column fr-flex-gap-2v fr-direction-md-row">
                      <Button
                        {...buttonLoadingClassname(isLoading)}
                        type="button"
                        size="small"
                        priority="secondary"
                        onClick={onDemanderAModifier}
                      >
                        Demander&nbsp;à&nbsp;modifier
                      </Button>
                      <Button
                        {...buttonLoadingClassname(isLoading)}
                        iconId="fr-icon-check-line"
                        iconPosition="right"
                        size="small"
                        type="button"
                        onClick={onAccepter}
                      >
                        Accepter
                      </Button>
                    </span>
                  )}
                </span>
              }
            />
          )}
        {!!beneficiaireDotationFormationValideEtEnvoye &&
          !!beneficiaireDotationFormationAccepte && (
            <Notice
              className="fr-mt-8v fr-notice--success"
              title={
                <span className="fr-flex fr-width-full fr-align-items-center fr-justify-content-space-between fr-flex-gap-4v">
                  <span>
                    Demande acceptée le {beneficiaireDotationFormationAccepte}.
                  </span>
                </span>
              }
            />
          )}
      </>
    )
  }

  const displayNotFoundNotice = !form.watch('membreGouvernanceId')

  return (
    <>
      {title}
      <hr className="fr-separator-8v" />
      {hintContent}
      <form
        className="fr-mt-8v"
        id="beneficiaire-formation"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {error ? (
          <div className="fr-fieldset__element">
            <div className="fr-alert fr-alert--error fr-alert--sm">
              <p>{error.message}</p>
            </div>
          </div>
        ) : null}
        <SelectFormField
          label="Ajouter le bénéficiaire"
          asterisk
          placeholder=" "
          control={form.control}
          path="membreGouvernanceId"
          disabled={isLoading}
          options={beneficiairesOptions}
        />

        {displayNotFoundNotice && <FindMemberNotice className="fr-mt-8v" />}

        <Notice
          className="fr-mt-8v fr-notice--no-icon"
          title={
            <span className="fr-flex fr-width-full fr-align-items-center fr-justify-content-space-between fr-flex-gap-4v">
              <span>
                Validez votre formulaire avant le{' '}
                {dateAsDay(limiteDeploiementDeFeuillesDeRoute)} pour que vos
                demandes de crédits de formations et d’ingéniérie soit
                instruite. Vous ne pourrez ensuite plus le modifier.
              </span>
              <Button
                {...buttonLoadingClassname(isLoading)}
                iconId="fr-icon-check-line"
                type="submit"
                disabled={mustEditContextBeforeValidate}
              >
                Valider&nbsp;&&nbsp;envoyer
              </Button>
            </span>
          }
        />
        {mustEditContextBeforeValidate && (
          <Notice
            className="fr-mt-4v fr-notice--warning"
            title="Veuiller enregistrer la contextualisation des demandes de subvention pour pouvoir valider et envoyer votre demande"
          />
        )}
        {renderModal &&
          createPortal(
            <Component
              title="Valider et envoyer votre demande de subvention"
              buttons={[
                {
                  type: 'button',
                  priority: 'secondary',
                  doClosesModal: true,
                  children: 'Annuler',
                  disabled: isLoading,
                },
                {
                  doClosesModal: false,
                  type: 'button',
                  priority: 'primary',
                  children: 'Valider & envoyer',
                  iconId: 'fr-icon-check-line',
                  iconPosition: 'right',
                  onClick: onConfirm,
                  ...buttonLoadingClassname(isLoading),
                },
              ]}
            >
              Cette validation est définitive, vous ne pourrez plus modifier le
              bénéficiaire de la dotation formation.
              <br />
              <br />
              Nos équipes instruisent les demandes de subvention au fur et à
              mesure de leur réception.
              <br />
              <br />
              1. Si la demande est conforme, nos équipes reviennent vers les
              destinataires des fonds pour établir les conventions. Les
              préfectures seront en copie des échanges.
              <br />
              <br />
              2. Si la demande nécessite des précisions, nos équipes reviennent
              vers la préfecture.
            </Component>,
            document.body,
          )}
      </form>
    </>
  )
}

export default withTrpc(BeneficiaireSubventionFormationForm)
