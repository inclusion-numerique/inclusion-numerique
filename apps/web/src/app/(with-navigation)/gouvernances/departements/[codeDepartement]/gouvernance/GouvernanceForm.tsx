'use client'

import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputFormField from '@app/ui/components/Form/InputFormField'
import Button from '@codegouvfr/react-dsfr/Button'
import { DefaultValues } from 'react-hook-form/dist/types/form'
import React, { RefObject, useEffect, useRef } from 'react'
import RichTextFormField from '@app/ui/components/Form/RichText/RichTextFormField'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import { useReplaceUrlToAnchor } from '@app/ui/hooks/useReplaceUrlToAnchor'
import { createToast } from '@app/ui/toast/createToast'
import { useScrollToError } from '@app/ui/hooks/useScrollToError'
import * as Sentry from '@sentry/nextjs'
import { gouvernanceFormSections } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections'
import CoporteursForm from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections/CoporteursForm'
import GouvernanceFormSectionCard from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections/GouvernanceFormSectionCard'
import type { MembreOptions } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/getMembresOptions'
import MembresForm from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections/MembresForm'
import ComitologieForm from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections/ComitologieForm'
import FeuillesDeRouteForm from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections/FeuillesDeRouteForm'
import CoordinateursConseillersNumeriqueForm from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections/CoordinateursConseillersNumeriqueForm'
import type { Option } from '@app/web/utils/options'
import {
  GouvernanceData,
  GouvernanceValidation,
} from '@app/web/gouvernance/Gouvernance'
import { withTrpc } from '@app/web/components/trpc/withTrpc'
import { gouvernanceHomePath } from '@app/web/app/(with-navigation)/gouvernances/gouvernancePaths'
import { applyZodValidationMutationErrorsToForm } from '@app/web/utils/applyZodValidationMutationErrorsToForm'
import { trpc } from '@app/web/trpc'
import RedAsterisk from '@app/web/ui/RedAsterisk'
import { useFileUpload } from '@app/web/hooks/useFileUpload'

const scrollToRef = (ref: RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
}

const GouvernanceForm = ({
  codeDepartement,
  codeRegion,
  defaultValues,
  className,
  membreOptions,
  perimetreEpciOptions,
  priorisationBesoinsEnregistree,
  v2Enregistree,
}: {
  codeDepartement: string
  codeRegion: string | null
  defaultValues: DefaultValues<GouvernanceData>
  className?: string
  priorisationBesoinsEnregistree?: boolean
  // If editing existing
  membreOptions: MembreOptions
  perimetreEpciOptions: Option[]
  v2Enregistree?: boolean
}) => {
  const form = useForm<GouvernanceData>({
    resolver: zodResolver(GouvernanceValidation),
    defaultValues,
  })
  const {
    control,
    setError,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = form

  const replaceUrlToAnchor = useReplaceUrlToAnchor()
  const mutation = trpc.gouvernance.updateGouvernanceV2.useMutation()
  const router = useRouter()

  // General errors (not linked to input) must have refs to trigger scroll on submit
  const membresErrorRef = useRef<HTMLParagraphElement>(null)
  const comitesErrorRef = useRef<HTMLParagraphElement>(null)
  const feuillesDeRouteErrorRef = useRef<HTMLParagraphElement>(null)
  const recruteursCoordinateursErrorRef = useRef<HTMLParagraphElement>(null)

  // Scroll to first general error on submit
  useEffect(() => {
    if (errors.membres) {
      scrollToRef(membresErrorRef)
      return
    }
    if (errors.comites) {
      scrollToRef(comitesErrorRef)
      return
    }
    if (errors.feuillesDeRoute) {
      scrollToRef(feuillesDeRouteErrorRef)
      return
    }
    if (errors.recruteursCoordinateurs) {
      scrollToRef(recruteursCoordinateursErrorRef)
    }
  }, [
    errors.membres,
    errors.comites,
    errors.feuillesDeRoute,
    errors.recruteursCoordinateurs,
  ])

  // File upload hooks for storage
  const fileUpload = useFileUpload({})
  // Upload model creation mutation
  const createUpload = trpc.upload.create.useMutation()
  const scrollToError = useScrollToError({ errors })

  const onSubmit = async (data: GouvernanceData) => {
    const pieceJointeFeuilleDeRouteUpdated = []

    for (let index = 0; index < data.feuillesDeRoute.length; index += 1) {
      if (
        data.pieceJointeFeuilleDeRouteValidation &&
        data.pieceJointeFeuilleDeRouteValidation[index]
      ) {
        pieceJointeFeuilleDeRouteUpdated.push(
          data.pieceJointeFeuilleDeRouteValidation[index],
        )
        const uploadKey = data.pieceJointeFeuilleDeRouteValidation[index]?.key
        const hasUploadKey =
          defaultValues.pieceJointeFeuilleDeRouteValidation?.find(
            (pieceJointeFeuilleDeRoute) =>
              pieceJointeFeuilleDeRoute?.key === uploadKey,
          )

        if (
          !hasUploadKey &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          data.pieceJointeFeuilleDeRouteValidation[index]?.file.value !==
            undefined
        ) {
          try {
            // Upload file and get uploaded file key
            // eslint-disable-next-line no-await-in-loop
            const uploaded = await fileUpload.upload(
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, prettier/prettier
              data.pieceJointeFeuilleDeRouteValidation[index]?.file.value as File,
            )

            if (!uploaded || 'error' in uploaded) {
              form.setError(
                `pieceJointeFeuilleDeRouteValidation.${index}.file`,
                {
                  message: 'Une erreur est survenue lors de l’envoi du fichier',
                },
              )
              createToast({
                priority: 'error',
                message:
                  'Une erreur est survenue lors de l’envoi de votre pièce jointe de la feuille de route',
              })
              setTimeout(scrollToError.trigger, 50)
              // Upload failed, error will be displayed from hooks states
              return
            }

            // Create upload model
            // eslint-disable-next-line no-await-in-loop
            const uploadModel = await createUpload.mutateAsync({
              file: uploaded,
            })

            // Reset upload input
            // @ts-expect-error ???
            pieceJointeFeuilleDeRouteUpdated[index].key = uploadModel.key
            setTimeout(() => {
              form.setValue(
                `pieceJointeFeuilleDeRouteValidation.${index}.file`,
                null,
              )
              form.setValue(
                `pieceJointeFeuilleDeRouteValidation.${index}.key`,
                uploadModel.key,
                {
                  shouldValidate: true,
                },
              )
            }, 0)
          } catch (error) {
            Sentry.captureException(error)
            createToast({
              priority: 'error',
              message:
                'Une erreur est survenue lors de l’envoi de votre pièce jointe de la feuille de route',
            })
          }
        }
      } else {
        pieceJointeFeuilleDeRouteUpdated.push({
          file: '',
          key: document.querySelector<HTMLInputElement>(
            `#pieceJointeFeuilleDeRouteValidationKey${index}`,
          )?.value,
        })
      }
    }

    try {
      await mutation.mutateAsync({
        ...data,
        pieceJointeFeuilleDeRouteValidation: pieceJointeFeuilleDeRouteUpdated,
      })
      router.refresh()
      createToast({
        priority: 'success',
        message: 'La gouvernance a bien été enregistrée',
      })
      // Open the modal on redirect if everything is completed for the first time
      const firstTimeAllCompleted =
        !v2Enregistree && priorisationBesoinsEnregistree
      router.push(
        gouvernanceHomePath(
          { codeDepartement },
          { gouvernanceCompleted: firstTimeAllCompleted },
        ),
      )
      router.refresh()
    } catch (mutationError) {
      if (!applyZodValidationMutationErrorsToForm(mutationError, setError)) {
        // TODO Go over this kind of stuff and add Toast
        throw mutationError
      }
    }
  }

  const isLoading = (isSubmitting || isSubmitSuccessful) && !mutation.error

  const {
    fields: membresFields,
    append: appendMembre,
    remove: removeMembre,
    update: updateMembre,
  } = useFieldArray({
    control,
    name: 'membres',
    keyName: '_formKey',
  })

  form.watch((data) => {
    // eslint-disable-next-line unicorn/no-array-for-each
    data.pieceJointeFeuilleDeRouteValidation?.forEach(
      (pieceJointeFeuilleDeRoute, index) => {
        // If file changed, we reset the file key waiting for upload in submit logic
        if (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          pieceJointeFeuilleDeRoute?.file?.value &&
          pieceJointeFeuilleDeRoute?.key === undefined
        ) {
          form.setValue(
            `pieceJointeFeuilleDeRouteValidation.${index}.key`,
            '__upload-pending__',
          )
        }
      },
    )
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="gouvernance-form" className={className}>
        <h3 className="fr-text-title--blue-france fr-mt-6v">Gouvernance</h3>
        <p className="fr-text--sm fr-text--medium fr-mt-6v fr-mb-0">
          Les champs avec <RedAsterisk /> sont obligatoires
        </p>
        <GouvernanceFormSectionCard
          {...gouvernanceFormSections.contactDuSousPrefetReferent}
        >
          <InputFormField
            label="Prénom"
            path="sousPrefetReferentPrenom"
            asterisk
            control={control}
            disabled={isLoading}
          />
          <InputFormField
            label="Nom"
            path="sousPrefetReferentNom"
            asterisk
            control={control}
            disabled={isLoading}
          />
          <InputFormField
            label="Adresse e-mail"
            path="sousPrefetReferentEmail"
            asterisk
            control={control}
            disabled={isLoading}
          />
        </GouvernanceFormSectionCard>
        <CoporteursForm
          form={form}
          disabled={isLoading}
          membresOptions={membreOptions}
          membreFields={membresFields}
          appendMembre={appendMembre}
          removeMembre={removeMembre}
          updateMembre={updateMembre}
        />
        <MembresForm
          form={form}
          disabled={isLoading}
          membresOptions={membreOptions}
          membreFields={membresFields}
          appendMembre={appendMembre}
          removeMembre={removeMembre}
          membresErrorRef={membresErrorRef}
        />
        <ComitologieForm
          form={form}
          disabled={isLoading}
          replaceUrlToAnchor={replaceUrlToAnchor}
          comitesErrorRef={comitesErrorRef}
        />
        <FeuillesDeRouteForm
          form={form}
          disabled={isLoading}
          membresOptions={membreOptions}
          membreFields={membresFields}
          appendMembre={appendMembre}
          departementHasRegion={!!codeRegion}
          perimetreEpciOptions={perimetreEpciOptions}
          replaceUrlToAnchor={replaceUrlToAnchor}
          feuillesDeRouteErrorRef={feuillesDeRouteErrorRef}
        />
        <CoordinateursConseillersNumeriqueForm
          form={form}
          disabled={isLoading}
          recruteursCoordinateursErrorRef={recruteursCoordinateursErrorRef}
        />
        <GouvernanceFormSectionCard {...gouvernanceFormSections.noteDeContexte}>
          <RichTextFormField
            form={form}
            path="noteDeContexte"
            disabled={isLoading}
          />
        </GouvernanceFormSectionCard>

        <div className="fr-btns-group fr-mt-10v">
          <Button
            type="submit"
            className={classNames(isLoading && 'fr-btn--loading')}
          >
            Enregistrer
          </Button>
        </div>
        {mutation.error && (
          <p className="fr-error-text fr-mt-2v">
            Une erreur est survenue, veuillez réessayer.
          </p>
        )}
      </div>
    </form>
  )
}

export default withTrpc(GouvernanceForm)
