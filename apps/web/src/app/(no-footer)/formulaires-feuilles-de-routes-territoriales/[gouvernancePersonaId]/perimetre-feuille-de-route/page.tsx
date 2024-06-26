import React, { ReactNode } from 'react'
import Notice from '@codegouvfr/react-dsfr/Notice'
import Breadcrumbs from '@app/web/components/Breadcrumbs'
import {
  getPageFormulaireData,
  PageFormulaireProps,
} from '@app/web/app/(public)/formulaires-feuilles-de-routes-territoriales/pageFormulaireData'
import { prismaClient } from '@app/web/prismaClient'
import BackLink from '@app/web/components/BackLink'
import ProgressFormulairesFeuillesDeRoute from '@app/web/app/(no-footer)/formulaires-feuilles-de-routes-territoriales/ProgressFormulairesFeuillesDeRoute'
import { getEtapeInfo } from '@app/web/app/(public)/formulaires-feuilles-de-routes-territoriales/etapeFormulaireGouvernance'
import { GouvernanceFormulaireForForm } from '@app/web/app/(public)/formulaires-feuilles-de-routes-territoriales/getCurrentFormulaireGouvernanceForFormByUser'
import { asyncComponent } from '@app/web/utils/asyncComponent'
import {
  getPerimetreDepartementOptions,
  getPerimetreRegionOptions,
} from '@app/web/app/(no-footer)/formulaires-feuilles-de-routes-territoriales/[gouvernancePersonaId]/perimetre-feuille-de-route/perimetreData'
import PerimetreFeuilleDeRoute from '@app/web/app/(no-footer)/formulaires-feuilles-de-routes-territoriales/[gouvernancePersonaId]/perimetre-feuille-de-route/PerimetreFeuilleDeRoute'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export { pageFormulaireMetadata as metadata } from '@app/web/app/(public)/formulaires-feuilles-de-routes-territoriales/pageFormulaireData'

const PerimetreDepartementWrapper = asyncComponent(
  async ({
    formulaireGouvernance,
    nextEtapePath,
    codeDepartement,
  }: {
    formulaireGouvernance: GouvernanceFormulaireForForm
    nextEtapePath: string
    codeDepartement: string
  }) => {
    const departementPerimetreOptions = await getPerimetreDepartementOptions([
      codeDepartement,
    ])
    return (
      <PerimetreFeuilleDeRoute
        formulaireGouvernance={formulaireGouvernance}
        nextEtapePath={nextEtapePath}
        perimetreOptions={departementPerimetreOptions}
      />
    )
  },
)

const PerimetreEpciWrapper = asyncComponent(
  async ({
    formulaireGouvernance,
    nextEtapePath,
    codeEpci,
  }: {
    formulaireGouvernance: GouvernanceFormulaireForForm
    nextEtapePath: string
    codeEpci: string
  }) => {
    // An EPCI can be in multiple departements
    const departements = await prismaClient.departement.findMany({
      where: {
        communes: {
          some: {
            codeEpci,
          },
        },
      },
      select: {
        code: true,
        nom: true,
      },
    })
    if (departements.length === 0) {
      throw new Error(`No departements found for EPCI ${codeEpci}`)
    }
    const departementPerimetreOptions = await getPerimetreDepartementOptions(
      departements.map(({ code }) => code),
    )
    return (
      <PerimetreFeuilleDeRoute
        formulaireGouvernance={formulaireGouvernance}
        nextEtapePath={nextEtapePath}
        perimetreOptions={departementPerimetreOptions}
      />
    )
  },
)

const PerimetreRegionWrapper = asyncComponent(
  async ({
    formulaireGouvernance,
    nextEtapePath,
    codeRegion,
  }: {
    formulaireGouvernance: GouvernanceFormulaireForForm
    nextEtapePath: string
    codeRegion: string
  }) => {
    const departements = await prismaClient.departement.findMany({
      where: {
        codeRegion,
      },
      select: {
        nom: true,
        code: true,
      },
    })

    if (departements.length === 0) {
      throw new Error(`No departements found for region ${codeRegion}`)
    }

    const departementsPerimetreOptions =
      await getPerimetreRegionOptions(departements)

    return (
      <PerimetreFeuilleDeRoute
        perimetreOptions={departementsPerimetreOptions}
        formulaireGouvernance={formulaireGouvernance}
        nextEtapePath={nextEtapePath}
      />
    )
  },
)

/**
 * This page redirects to the current step of the form
 */
const Page = async (props: PageFormulaireProps) => {
  const { formulaireGouvernance, persona, breadcrumbs, retourHref } =
    await getPageFormulaireData(props, 'perimetre-feuille-de-route')

  if (!persona) {
    throw new Error('perimetre page: persona is missing')
  }

  const nextEtapeInfo = getEtapeInfo({
    etape: 'contacts-collectivites',
    gouvernancePersonaId: persona.id,
  })

  let wrapper: ReactNode = null
  switch (persona.id) {
    case 'conseil-regional': {
      const codeRegion = formulaireGouvernance.regionCode
      if (!codeRegion) {
        throw new Error(
          'No region code in conseil-regional form data on "perimetre-feuille-de-route" step',
        )
      }

      wrapper = (
        <PerimetreRegionWrapper
          formulaireGouvernance={formulaireGouvernance}
          nextEtapePath={nextEtapeInfo.absolutePath}
          codeRegion={codeRegion}
        />
      )

      break
    }
    case 'conseil-departemental': {
      const codeDepartement = formulaireGouvernance.departementCode
      if (!codeDepartement) {
        throw new Error(
          'No departement code in conseil-departemental form data on "perimetre-feuille-de-route" step',
        )
      }
      wrapper = (
        <PerimetreDepartementWrapper
          formulaireGouvernance={formulaireGouvernance}
          nextEtapePath={nextEtapeInfo.absolutePath}
          codeDepartement={codeDepartement}
        />
      )

      break
    }
    case 'epci': {
      const codeEpci = formulaireGouvernance.epciCode
      if (!codeEpci) {
        throw new Error(
          'No epci code in epci form data on "perimetre-feuille-de-route" step',
        )
      }
      wrapper = (
        <PerimetreEpciWrapper
          formulaireGouvernance={formulaireGouvernance}
          nextEtapePath={nextEtapeInfo.absolutePath}
          codeEpci={codeEpci}
        />
      )
      break
    }
    default: {
      throw new Error('Invalid persona for "perimetre-feuille-de-route" step')
    }
  }

  return (
    <>
      <div className="fr-container">
        <Breadcrumbs {...breadcrumbs} />
      </div>
      <div className="fr-container fr-container--medium formulaire-gouvernance-no-footer-margin-bottom">
        <BackLink href={retourHref} />
        <ProgressFormulairesFeuillesDeRoute
          progression={2}
          currentTitle="Périmètre de votre feuille de route"
          nextTitle="Contacts des collectivités partenaires"
        />
        <h1 className="fr-text-title--blue-france fr-mb-2v">
          Périmètre de votre feuille de route
        </h1>
        <p className="fr-text--lg fr-text-mention--grey">
          Renseignez quels sont les EPCI & les communes qui vont faire partie de
          votre feuille de route de l’Inclusion Numérique.
        </p>
        <Notice
          title="Vous devrez renseigner à l'étape suivante un contact pour chaque territoire sélectionné."
          className="fr-my-12v"
        />
        {wrapper}
      </div>
    </>
  )
}

export default Page
