import React, { useState } from 'react'
import { useFieldArray, useForm, UseFormReturn } from 'react-hook-form'
import Button from '@codegouvfr/react-dsfr/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { gouvernanceFormSections } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections'
import GouvernanceFormSectionCard from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections/GouvernanceFormSectionCard'
import {
  GouvernanceData,
  SiretInfoData,
  SiretInfoValidation,
} from '@app/web/gouvernance/Gouvernance'
import InfoLabelValue from '@app/web/components/Gouvernance/InfoLabelValue'
import SiretFormField from '@app/web/components/Siret/SiretFormField'

const CoordinateursConseillersNumeriqueForm = ({
  form,
  disabled,
  recruteursCoordinateursErrorRef,
}: {
  form: UseFormReturn<GouvernanceData>
  disabled?: boolean
  recruteursCoordinateursErrorRef: React.RefObject<HTMLParagraphElement>
}) => {
  const {
    control,
    formState: { errors },
  } = form

  const [addingRecruteur, setAddingRecruteur] = useState(false)

  const {
    fields: recruteurFields,
    append: appendRecruteur,
    remove: removeRecruteur,
  } = useFieldArray({
    control,
    name: 'recruteursCoordinateurs',
    keyName: '_formKey',
  })

  const addRecruteurForm = useForm<SiretInfoData>({
    resolver: zodResolver(SiretInfoValidation),
  })

  const onAddRecruteur = () => {
    addRecruteurForm.handleSubmit((data) => {
      appendRecruteur({
        ...data,
      })

      setAddingRecruteur(false)
      addRecruteurForm.reset()
    })()
  }

  const onCancel = () => {
    setAddingRecruteur(false)
    addRecruteurForm.reset()
  }

  return (
    <GouvernanceFormSectionCard
      {...gouvernanceFormSections.coordinateurConseillerNumeriqueDeLaGouvernance}
    >
      {/* eslint-disable-next-line no-return-assign */}
      {recruteurFields.map(({ _formKey, nom, siret }, index) => {
        const recruteurError = errors.recruteursCoordinateurs?.[index]
        const errorMessage =
          recruteurError?.message ||
          recruteurError?.siret?.message ||
          recruteurError?.nom?.message

        return (
          <div key={_formKey}>
            <div className="fr-flex fr-justify-content-space-between fr-align-items-center">
              <span>
                <InfoLabelValue
                  label={`Collectivité/structure recruteuse ${index + 1}`}
                  value={nom || siret}
                />
                {!!errorMessage && (
                  <p
                    id={`recruteurs_coordinateurs_${index}__error`}
                    className="fr-error-text fr-mb-0 fr-mt-1v"
                  >
                    {errorMessage}
                  </p>
                )}
              </span>
              <Button
                className="fr-ml-1w"
                type="button"
                priority="tertiary no outline"
                disabled={disabled}
                size="small"
                iconId="fr-icon-delete-bin-line"
                title="Supprimer"
                onClick={() => removeRecruteur(index)}
              />
            </div>
            <hr className="fr-separator-8v" />
          </div>
        )
      })}
      {addingRecruteur && (
        <>
          <h6 className="fr-mb-8v">
            Ajout d’une collectivité/structure recruteuse
          </h6>
          <SiretFormField
            form={addRecruteurForm}
            path="siret"
            asterisk
            disabled={disabled}
            label="SIRET de la collectivité/structure"
          />
          <div className="fr-flex fr-width-full fr-justify-content-end">
            <Button type="button" onClick={onCancel} priority="secondary">
              Annuler
            </Button>
            <Button
              type="button"
              className="fr-ml-2w"
              onClick={onAddRecruteur}
              iconId="fr-icon-check-line"
              iconPosition="right"
            >
              Ajouter
            </Button>
          </div>
        </>
      )}

      {!!errors.recruteursCoordinateurs?.message && (
        <p
          ref={recruteursCoordinateursErrorRef}
          id="recruteurs_coordinateurs__error"
          className="fr-error-text fr-mb-4v"
        >
          {errors.recruteursCoordinateurs.message}
        </p>
      )}

      {!addingRecruteur && (
        <div className="fr-btns-group fr-mt-8v fr-mb-0 fr-btns-group--icon-left">
          <Button
            type="button"
            iconId="fr-icon-add-line"
            className="fr-my-0"
            priority="secondary"
            onClick={() => setAddingRecruteur(true)}
          >
            Ajouter une collectivité/structure recruteuse
          </Button>
        </div>
      )}
    </GouvernanceFormSectionCard>
  )
}

export default CoordinateursConseillersNumeriqueForm
