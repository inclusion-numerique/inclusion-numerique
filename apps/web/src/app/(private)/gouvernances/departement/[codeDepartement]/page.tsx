import { notFound } from 'next/navigation'
import React from 'react'
import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb'
import Button from '@codegouvfr/react-dsfr/Button'
import { prismaClient } from '@app/web/prismaClient'
import StatistiquesGouvernances from '@app/web/app/(private)/gouvernances/StatistiquesGouvernances'
import { getStatistiquesGouvernanceDepartement } from '@app/web/app/(private)/gouvernances/getStatistiquesGouvernances'
import styles from '@app/web/app/(private)/gouvernances/Gouvernances.module.css'
import { checkUserAccessToGouvernanceScopeOrNavigate } from '@app/web/app/(private)/gouvernances/checkUserAccessToGouvernanceScopeOrNavigate'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const generateMetadata = async ({
  params: { codeDepartement },
}: {
  params: { codeDepartement: string }
}) => {
  const departement = await prismaClient.departement.findUnique({
    where: {
      code: codeDepartement,
    },
    select: {
      code: true,
      nom: true,
    },
  })
  if (!departement) {
    notFound()
  }

  return {
    title: `${departement.nom} - Gouvernance`,
  }
}

const Page = async ({
  params: { codeDepartement },
}: {
  params: { codeDepartement: string }
}) => {
  await checkUserAccessToGouvernanceScopeOrNavigate({ codeDepartement })

  const statistiquesGouvernance = await getStatistiquesGouvernanceDepartement(
    codeDepartement,
  )

  return (
    <div className="fr-container fr-pb-20v">
      <Breadcrumb
        currentPageLabel="Gouvernance"
        segments={[
          {
            label: "Page d'accueil",
            linkProps: {
              href: '/',
            },
          },
        ]}
      />
      <StatistiquesGouvernances
        codeDepartement={codeDepartement}
        statistiquesGouvernance={statistiquesGouvernance}
      />
      <hr className="fr-separator-12v" />
      <h3 className="fr-mb-12v">
        Gouvernances et porteurs pressentis des feuilles de route locales France
        Numérique Ensemble au sein de votre département
      </h3>
      <div className={styles.gouvernancesCtaCard}>
        <span>
          <div className="fr-badge fr-badge--warning">
            renseigner avant le 15/10/2023
          </div>
          <p className="fr-mb-0 fr-mt-3v">
            <strong>
              Une ou plusieurs gouvernances se dessinent sur votre territoire.
            </strong>
            <br />
            Faites remonter les porteurs de feuilles de route territoriale et
            les périmètres des gouvernances pressenties.
          </p>
        </span>
        <Button
          iconId="fr-icon-add-line"
          size="large"
          linkProps={{
            href: `/gouvernances/departement/${codeDepartement}/remonter-une-gouvernance-pressentie`,
          }}
        >
          Remonter une gouvernance pressentie
        </Button>
      </div>
    </div>
  )
}

export default Page
