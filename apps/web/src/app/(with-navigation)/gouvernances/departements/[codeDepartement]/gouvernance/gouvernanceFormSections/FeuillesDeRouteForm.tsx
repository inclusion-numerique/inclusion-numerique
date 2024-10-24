import React, { useState } from 'react'
import { useFieldArray, useForm, UseFormReturn } from 'react-hook-form'
import Button from '@codegouvfr/react-dsfr/Button'
import RadioFormField from '@app/ui/components/Form/RadioFormField'
import InputFormField from '@app/ui/components/Form/InputFormField'
import { zodResolver } from '@hookform/resolvers/zod'
import { TypeContrat } from '@prisma/client'
import CustomSelectFormField from '@app/ui/components/Form/CustomSelectFormField'
import CheckboxGroupFormField from '@app/ui/components/Form/CheckboxGroupFormField'
import { ReplaceUrlToAnchor } from '@app/ui/hooks/useReplaceUrlToAnchor'
import CheckboxFormField from '@app/ui/components/Form/CheckboxFormField'
import Badge from '@codegouvfr/react-dsfr/Badge'
import FileFormField from '@app/ui/components/Form/FileFormField'
import { formatByteSize } from '@app/ui/utils/formatByteSize'
import { gouvernanceFormSections } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections'
import GouvernanceFormSectionCard from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections/GouvernanceFormSectionCard'
import type { MembreOptions } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/getMembresOptions'
import FindMemberNotice from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/FindMemberNotice'
import {
  FeuilleDeRouteData,
  FeuilleDeRouteValidation,
  GouvernanceData,
  MembreData,
} from '@app/web/gouvernance/Gouvernance'
import InfoLabelValue from '@app/web/components/Gouvernance/InfoLabelValue'
import {
  feuilleDeRoutePerimetreOptions,
  ouiOuNonOptions,
  perimetreFeuilleDeRouteLabels,
  typeContratLabels,
  typeContratOptions,
} from '@app/web/gouvernance/gouvernanceWordingsAndOptions'
import { Option } from '@app/web/utils/options'
import styles from '../GouvernanceForm.module.css'
import { supprimerUnePieceJointeAction } from './supprimerUnePieceJointeAction'

const defaultValues = {
  perimetreEpciCodes: [],
}

const FeuillesDeRouteForm = ({
  form,
  disabled,
  membreFields,
  appendMembre,
  membresOptions,
  perimetreEpciOptions,
  replaceUrlToAnchor,
  feuillesDeRouteErrorRef,
  departementHasRegion,
}: {
  form: UseFormReturn<GouvernanceData>
  membresOptions: MembreOptions
  appendMembre: (membre: MembreData) => void
  perimetreEpciOptions: Option[]
  membreFields: (MembreData & { _formKey: string })[]
  disabled?: boolean
  replaceUrlToAnchor: ReplaceUrlToAnchor
  feuillesDeRouteErrorRef: React.RefObject<HTMLParagraphElement>
  departementHasRegion: boolean
}) => {
  const {
    control,
    formState: { errors },
  } = form

  const [addingFeuilleDeRoute, setAddingFeuilleDeRoute] = useState(false)

  // Index of the form field item being edited
  const [editingFeuilleDeRoute, setEditingFeuilleDeRoute] = useState<
    number | null
  >(null)

  const {
    fields: feuilleDeRouteFields,
    append: appendFeuilleDeRoute,
    remove: removeFeuilleDeRoute,
    update: updateFeuilleDeRoute,
  } = useFieldArray({
    control,
    name: 'feuillesDeRoute',
    keyName: '_formKey',
  })

  const addFeuilleDeRouteForm = useForm<FeuilleDeRouteData>({
    resolver: zodResolver(FeuilleDeRouteValidation),
    defaultValues,
  })

  const onEditFeuilleDeRoute = (index: number) => {
    const item = feuilleDeRouteFields[index]

    addFeuilleDeRouteForm.reset({
      id: item.id,
      nom: item.nom,
      porteur: item.porteur,
      contratPreexistant: item.contratPreexistant,
      perimetreEpciCodes: item.perimetreEpciCodes,
      typeContrat: item.typeContrat,
      typeContratAutreDescription: item.typeContratAutreDescription,
      perimetreScope: item.perimetreScope,
      pasDePorteur: item.pasDePorteur,
    })

    setEditingFeuilleDeRoute(index)
  }

  /**
   * Ajouter une option “Porté seulement par la préfecture” seulement si “pas de co-porteur” coché en porteur de gouvernance
   */
  const pasDeCoporteurs = !!form.watch('pasDeCoporteurs')

  const onSaveFeuilleDeRoute = () => {
    addFeuilleDeRouteForm.handleSubmit((data) => {
      const cleanedData = {
        ...data,
      }

      if (data.porteur) {
        // Create member from porteur if it doesn't exist
        const existingMembre = membreFields.findIndex(
          ({ code }) => code === data.porteur?.code,
        )

        if (existingMembre === -1) {
          appendMembre(data.porteur)
        }
      }

      if (addingFeuilleDeRoute) {
        appendFeuilleDeRoute(cleanedData)
        setAddingFeuilleDeRoute(false)
      }

      if (editingFeuilleDeRoute !== null) {
        updateFeuilleDeRoute(editingFeuilleDeRoute, cleanedData)
        setEditingFeuilleDeRoute(null)
      }

      addFeuilleDeRouteForm.reset(defaultValues)
      replaceUrlToAnchor(gouvernanceFormSections.feuillesDeRouteEtPorteurs.id)
    })()
  }

  const onCancel = () => {
    setAddingFeuilleDeRoute(false)
    setEditingFeuilleDeRoute(null)
    addFeuilleDeRouteForm.reset(defaultValues)
  }

  const showTypeContrat =
    addFeuilleDeRouteForm.watch('contratPreexistant') === 'oui'

  const showPrecisez =
    addFeuilleDeRouteForm.watch('typeContrat') === TypeContrat.Autre &&
    showTypeContrat

  const showEpciPerimeter =
    addFeuilleDeRouteForm.watch('perimetreScope') === 'epci'

  const membreSelectOptions = membresOptions

  return (
    <GouvernanceFormSectionCard
      {...gouvernanceFormSections.feuillesDeRouteEtPorteurs}
    >
      {feuilleDeRouteFields.map(
        (
          {
            _formKey,
            nom,
            porteur,
            perimetreScope,
            typeContrat,
            // @ts-expect-error ???
            relationPieceJointe,
            id,
          },
          index,
        ) =>
          editingFeuilleDeRoute === index ? null : (
            <div key={_formKey}>
              <div className="fr-flex fr-justify-content-space-between fr-align-items-center">
                <span>
                  <InfoLabelValue
                    label={`Feuille de route ${index + 1} : ${nom}`}
                    value={
                      <>
                        Porteur&nbsp;:{' '}
                        {porteur?.nom ?? 'Portée par la préfecture'}
                        <br />
                        Périmètre géographique&nbsp;:{' '}
                        {perimetreFeuilleDeRouteLabels[perimetreScope]}
                        {typeContrat ? (
                          <>
                            <br />
                            Contrat préexistant&nbsp;:{' '}
                            {typeContratLabels[typeContrat]}
                          </>
                        ) : null}
                      </>
                    }
                  />
                </span>
                <span>
                  <Button
                    type="button"
                    priority="tertiary no outline"
                    disabled={disabled}
                    size="small"
                    className="fr-ml-1w"
                    iconId="fr-icon-edit-line"
                    title="Modifier"
                    onClick={() => onEditFeuilleDeRoute(index)}
                  />
                  <Button
                    className="fr-ml-1w"
                    type="button"
                    priority="tertiary no outline"
                    disabled={disabled}
                    size="small"
                    iconId="fr-icon-delete-bin-line"
                    title="Supprimer"
                    onClick={() => removeFeuilleDeRoute(index)}
                  />
                </span>
              </div>
              {relationPieceJointe ? (
                <div
                  className={`fr-flex fr-justify-content-space-between fr-align-items-center fr-mt-2w ${styles.cadre}`}
                >
                  <span>
                    <span
                      aria-hidden="true"
                      className="fr-icon-file-download-line fr-btn--sm"
                    />
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
                    {relationPieceJointe.name}
                  </span>
                  <input
                    type="hidden"
                    id={`pieceJointeFeuilleDeRouteValidationKey${index}`}
                    value={
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                      relationPieceJointe.key
                    }
                  />
                  <span>
                    <Button
                      className="fr-ml-1w"
                      type="button"
                      priority="tertiary no outline"
                      disabled={disabled}
                      size="small"
                      iconId="fr-icon-delete-bin-line"
                      title="Supprimer"
                      onClick={async () => {
                        await supprimerUnePieceJointeAction(
                          id as string,
                          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                          relationPieceJointe.key,
                        )
                        window.location.reload()
                      }}
                    />
                  </span>
                </div>
              ) : (
                <div className="fr-mt-2w">
                  <Badge small severity="new">
                    En attente de document
                  </Badge>
                  <FileFormField
                    accept=".pdf"
                    control={control}
                    path={`pieceJointeFeuilleDeRouteValidation.${index}.file.value`}
                    className="fr-mb-8v"
                    error={
                      errors.pieceJointeFeuilleDeRouteValidation
                        ? errors.pieceJointeFeuilleDeRouteValidation[index]?.key
                            ?.message
                        : ''
                    }
                    info={
                      <>
                        Taille maximale : {formatByteSize(40_000_000)}. Format
                        supporté : PDF.
                        <br />
                        Un modèle de feuille de route est disponible sur{' '}
                        <a
                          href="https://lesbases.anct.gouv.fr/ressources/comment-financer-les-feuilles-de-routes"
                          rel="external noopener noreferrer"
                          target="_blank"
                        >
                          La Base France Numérique Ensemble
                        </a>
                        .
                      </>
                    }
                  />
                </div>
              )}
              <hr className="fr-separator-8v" />
            </div>
          ),
      )}
      {(addingFeuilleDeRoute || editingFeuilleDeRoute !== null) && (
        <>
          <h6 className="fr-mb-8v">
            {editingFeuilleDeRoute === null
              ? 'Ajout d’une feuille de route'
              : 'Mofifier la feuille de route'}
          </h6>
          <InputFormField
            label="Quel est le nom de la feuille de route ?"
            asterisk
            control={addFeuilleDeRouteForm.control}
            path="nom"
            className="fr-mb-8v"
          />
          <CustomSelectFormField
            label="Quel membre de la gouvernance porte la feuille de route ?"
            asterisk
            control={addFeuilleDeRouteForm.control}
            path="porteur"
            options={membreSelectOptions}
            placeholder="Rechercher"
            disabled={disabled}
            transformOptionToValue={(option) => ({
              code: option.value,
              nom: option.stringLabel,
              coporteur: false,
            })}
          />
          {pasDeCoporteurs && (
            <CheckboxFormField
              label="Porté seulement par la préfecture"
              control={addFeuilleDeRouteForm.control}
              path="pasDePorteur"
              disabled={disabled}
            />
          )}
          <FindMemberNotice className="fr-mb-8v" />
          <RadioFormField
            label="Quel est le périmètre géographique de la feuille de route ?"
            asterisk
            control={addFeuilleDeRouteForm.control}
            path="perimetreScope"
            options={feuilleDeRoutePerimetreOptions.filter(
              // Departements without region can't have region perimeter
              ({ value }) => value !== 'region' || departementHasRegion,
            )}
          />
          {showEpciPerimeter && (
            <CheckboxGroupFormField
              label="Veuillez préciser l’EPCI ou les EPCI dans le cas d’un autre groupement de collectivités :"
              asterisk
              control={addFeuilleDeRouteForm.control}
              path="perimetreEpciCodes"
              options={perimetreEpciOptions}
            />
          )}
          <RadioFormField
            label="La feuille de route s’appuie-t-elle sur un contrat préexistant ?"
            asterisk
            control={addFeuilleDeRouteForm.control}
            path="contratPreexistant"
            options={ouiOuNonOptions}
          />
          {showTypeContrat && (
            <RadioFormField
              label="Sélectionnez le type de contrat"
              asterisk
              control={addFeuilleDeRouteForm.control}
              path="typeContrat"
              options={typeContratOptions}
              className="fr-mb-0"
            />
          )}
          {showPrecisez && (
            <InputFormField
              label="Précisez"
              asterisk
              control={addFeuilleDeRouteForm.control}
              path="typeContratAutreDescription"
              className="fr-mb-8v"
            />
          )}
          <div className="fr-flex fr-width-full fr-justify-content-end">
            <Button type="button" onClick={onCancel} priority="secondary">
              Annuler
            </Button>
            <Button
              type="button"
              className="fr-ml-2w"
              onClick={onSaveFeuilleDeRoute}
              iconId="fr-icon-check-line"
              iconPosition="right"
            >
              {editingFeuilleDeRoute === null ? 'Ajouter' : 'Modifier'}
            </Button>
          </div>
        </>
      )}
      {!!errors.feuillesDeRoute && (
        <p
          ref={feuillesDeRouteErrorRef}
          id="feuilles_de_route__error"
          className="fr-error-text fr-mb-4v"
        >
          {errors.feuillesDeRoute.message}
        </p>
      )}
      {!addingFeuilleDeRoute && !editingFeuilleDeRoute && (
        <div className="fr-btns-group fr-mt-8v fr-mb-0 fr-btns-group--icon-left">
          <Button
            type="button"
            iconId="fr-icon-add-line"
            className="fr-my-0"
            priority="secondary"
            onClick={() => setAddingFeuilleDeRoute(true)}
          >
            Ajouter une feuille de route
          </Button>
        </div>
      )}
    </GouvernanceFormSectionCard>
  )
}

export default FeuillesDeRouteForm
