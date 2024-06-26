import CustomSelectFormField from '@app/ui/components/Form/CustomSelectFormField'
import React, { RefObject } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import Button from '@codegouvfr/react-dsfr/Button'
import { sPluriel } from '@app/ui/utils/pluriel/sPluriel'
import { gouvernanceFormSections } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections'
import GouvernanceFormSectionCard from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections/GouvernanceFormSectionCard'
import {
  filterMemberOptions,
  MembreOptionItem,
  MembreOptions,
} from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/getMembresOptions'
import FindMemberNotice from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/FindMemberNotice'
import { GouvernanceData, MembreData } from '@app/web/gouvernance/Gouvernance'
import { getActorFromCode } from '@app/web/gouvernance/GouvernanceActor'
import { isDefinedAndNotNull } from '@app/web/utils/isDefinedAndNotNull'

const MembresForm = ({
  form,
  membresOptions,
  disabled,
  membreFields,
  removeMembre,
  appendMembre,
  membresErrorRef,
}: {
  form: UseFormReturn<GouvernanceData>
  disabled?: boolean
  membresOptions: MembreOptions
  membreFields: (MembreData & { _formKey: string })[]
  appendMembre: (membre: MembreData) => void
  removeMembre: (index: number) => void
  membresErrorRef: RefObject<HTMLParagraphElement>
}) => {
  const {
    formState: { errors },
  } = form

  const addMembreForm = useForm<{ code: string }>({
    defaultValues: {
      code: '',
    },
  })

  const onMembreChange = (option: MembreOptionItem | null) => {
    if (!option) {
      return
    }
    appendMembre({
      code: option.value,
      nom: option.stringLabel,
      coporteur: false,
    })
    addMembreForm.reset({ code: '' })
  }

  const collectiviteMembres = membreFields.filter(
    ({ code }) => getActorFromCode(code).type !== 'structure',
  )
  const structureMembres = membreFields.filter(
    ({ code }) => getActorFromCode(code).type === 'structure',
  )

  const membresPorteursFeuillesDeRoute = new Set(
    form
      .watch('feuillesDeRoute')
      .map(({ porteur }) => porteur?.code)
      .filter(isDefinedAndNotNull),
  )

  const membreSelectOptions = filterMemberOptions(membresOptions, {
    excludeCodes: membreFields.map(({ code }) => code),
  })

  return (
    <GouvernanceFormSectionCard
      {...gouvernanceFormSections.membresDeLaGouvernance}
    >
      <CustomSelectFormField
        label="Quelle collectivité/structure sera membre de la gouvernance ?"
        asterisk
        control={addMembreForm.control}
        path="code"
        options={membreSelectOptions}
        placeholder="Rechercher"
        disabled={disabled}
        onSelectChange={onMembreChange}
      />
      <FindMemberNotice className="fr-mb-8v" />
      {!!errors.membres && (
        <p
          ref={membresErrorRef}
          id="membres__error"
          className="fr-error-text fr-mb-8v"
        >
          {errors.membres?.message}
        </p>
      )}
      <div className="fr-flex fr-width-full fr-justify-content-space-between">
        <p className="fr-text--xl fr-my-0 fr-text--bold">
          Collectivité{sPluriel(collectiviteMembres.length)}
        </p>
        <p className="fr-text--xl fr-my-0 fr-text--bold">
          {collectiviteMembres.length}
        </p>
      </div>
      {membreFields.map(({ _formKey, code, nom, coporteur }, index) =>
        getActorFromCode(code).type === 'structure' ? null : (
          <div
            key={_formKey}
            className="fr-mt-4v fr-width-full fr-flex fr-justify-content-space-between fr-align-items-center"
          >
            <span>{nom}</span>
            {coporteur ? (
              <span className="fr-text--xs fr-my-0 fr-ml-2v">
                Co-porteur gouvernance
              </span>
            ) : membresPorteursFeuillesDeRoute.has(code) ? (
              <span className="fr-text--xs fr-my-0 fr-ml-2v">
                Porteur feuille de route
              </span>
            ) : (
              <Button
                className="fr-ml-2w"
                type="button"
                priority="tertiary no outline"
                size="small"
                iconId="fr-icon-delete-bin-line"
                title="Supprimer"
                onClick={() => removeMembre(index)}
              />
            )}
          </div>
        ),
      )}
      <hr className="fr-separator-8v" />
      <div className="fr-flex fr-width-full fr-justify-content-space-between">
        <p className="fr-text--xl fr-my-0 fr-text--bold">
          Structure{sPluriel(structureMembres.length)}
        </p>
        <p className="fr-text--xl fr-my-0 fr-text--bold">
          {structureMembres.length}
        </p>
      </div>
      {membreFields.map(({ code, nom, coporteur }, index) =>
        getActorFromCode(code).type === 'structure' ? (
          <div
            key={code}
            className="fr-mt-4v fr-width-full fr-flex fr-justify-content-space-between fr-align-items-center"
          >
            <span>{nom}</span>
            {coporteur ? (
              <span className="fr-text--xs fr-my-0 fr-ml-2v">
                Co-porteur gouvernance
              </span>
            ) : membresPorteursFeuillesDeRoute.has(code) ? (
              <span className="fr-text--xs fr-my-0 fr-ml-2v">
                Porteur feuille de route
              </span>
            ) : (
              <Button
                className="fr-ml-2w"
                type="button"
                priority="tertiary no outline"
                size="small"
                iconId="fr-icon-delete-bin-line"
                title="Supprimer"
                onClick={() => removeMembre(index)}
              />
            )}
          </div>
        ) : null,
      )}
    </GouvernanceFormSectionCard>
  )
}

export default MembresForm
