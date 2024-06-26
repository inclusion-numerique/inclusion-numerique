import React from 'react'
import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb'
import { notFound } from 'next/navigation'
import Progress from '@app/ui/components/Progress'
import Notice from '@codegouvfr/react-dsfr/Notice'
import { getBesoinsIngenierieFinanciereForForm } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/getGouvernanceForForm'
import { generateDepartementMetadata } from '@app/web/app/(with-navigation)/gouvernances/departements/generateDepartementMetadata'
import BesoinsIngenierieFinanciereSelectionForm from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/[gouvernanceId]/besoins-ingenierie-financiere/selection/BesoinsIngenierieFinanciereSelectionForm'
import { getBesoinsEnIngenierieSelectionDefaultValues } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/besoinsEnIngenierieSelectionDefaultValues'
import {
  gouvernanceHomePath,
  modifierBesoinsIngenieriePath,
} from '@app/web/app/(with-navigation)/gouvernances/gouvernancePaths'
import { canEditGouvernance } from '@app/web/security/securityRules'
import BackLink from '@app/web/components/BackLink'
import { getGouvernanceScopeTitle } from '@app/web/app/(with-navigation)/gouvernances/gouvernanceScopeTitle'
import { checkAccessControl } from '@app/web/app/checkAccessControl'
import { checkGouvernanceScopeWriteAccess } from '@app/web/app/(with-navigation)/gouvernances/checkGouvernanceScopeWriteAccess'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const generateMetadata = generateDepartementMetadata('Gouvernance')

const Page = async ({
  params: { codeDepartement, gouvernanceId },
}: {
  params: { codeDepartement: string; gouvernanceId: string }
}) => {
  const accessCheck = await checkAccessControl({
    check: (user) =>
      checkGouvernanceScopeWriteAccess({ scope: { codeDepartement }, user }),
    signinNextPath: `/gouvernances/departements/${codeDepartement}/gouvernance/${gouvernanceId}/besoins-ingenierie-financiere/priorisation`,
  })
  if (
    !canEditGouvernance(accessCheck.user, {
      departementCode: codeDepartement,
    })
  ) {
    notFound()
  }

  const gouvernance = await getBesoinsIngenierieFinanciereForForm({
    gouvernanceId,
  })

  if (!gouvernance) {
    notFound()
  }
  if (gouvernance.departement.code !== codeDepartement) {
    notFound()
  }
  if (gouvernance.besoinsEnIngenierieFinanciere?.priorisationEnregistree) {
    // Les besoins terminés ne sont plus éditables
    notFound()
  }
  const scopeTitle = await getGouvernanceScopeTitle({ codeDepartement })

  const defaultValues =
    getBesoinsEnIngenierieSelectionDefaultValues(gouvernance)

  return (
    <>
      <div className="fr-container">
        <Breadcrumb
          currentPageLabel="Sélection des besoins en ingénierie financière"
          segments={[
            {
              label: 'Page d’accueil',
              linkProps: {
                href: '/',
              },
            },
            {
              label: `Gouvernance - ${scopeTitle}`,
              linkProps: {
                href: gouvernanceHomePath({ codeDepartement }),
              },
            },
          ]}
        />
      </div>
      <div className="fr-container fr-container--narrow fr-pb-10v fr-mb-20v">
        <BackLink
          href={modifierBesoinsIngenieriePath(
            { codeDepartement },
            {
              step: 'intro',
              gouvernanceId,
            },
          )}
        />

        <Progress
          className="fr-my-12v"
          steps={2}
          progression={1}
          currentTitle="Sélectionnez vos besoins en ingénierie financière"
          nextTitle="Priorisez vos besoins en ingénierie financière"
        />
        <h1 className="fr-text-title--blue-france fr-mb-2v">
          Sélectionnez vos besoins en ingénierie financière
        </h1>
        <p className="fr-text--lg fr-text-mention--grey fr-mb-6v">
          Sélectionnez vos besoins en ingénierie financière et pour chaque
          besoin renseignez la typologie de financement qui pourrait
          correspondre à votre besoin
        </p>
        <Notice
          className="fr-my-6v"
          title="À l’étape suivante, vous pourrez prioriser les besoins sélectionnés."
        />
        <BesoinsIngenierieFinanciereSelectionForm
          defaultValue={defaultValues}
          codeDepartement={codeDepartement}
        />
      </div>
    </>
  )
}

export default Page
