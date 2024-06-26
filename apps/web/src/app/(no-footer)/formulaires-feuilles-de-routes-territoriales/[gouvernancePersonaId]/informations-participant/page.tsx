import React from 'react'
import Breadcrumbs from '@app/web/components/Breadcrumbs'
import {
  getPageFormulaireData,
  PageFormulaireProps,
} from '@app/web/app/(public)/formulaires-feuilles-de-routes-territoriales/pageFormulaireData'
import InformationsParticipants from '@app/web/app/(no-footer)/formulaires-feuilles-de-routes-territoriales/[gouvernancePersonaId]/informations-participant/InformationsParticipants'
import { prismaClient } from '@app/web/prismaClient'
import { OptionTuple } from '@app/web/utils/options'
import BackLink from '@app/web/components/BackLink'
import ProgressFormulairesFeuillesDeRoute from '@app/web/app/(no-footer)/formulaires-feuilles-de-routes-territoriales/ProgressFormulairesFeuillesDeRoute'
import { getEtapeInfo } from '@app/web/app/(public)/formulaires-feuilles-de-routes-territoriales/etapeFormulaireGouvernance'
import { getDepartementOptions } from '@app/web/data/getDepartementOptions'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export { pageFormulaireMetadata as metadata } from '@app/web/app/(public)/formulaires-feuilles-de-routes-territoriales/pageFormulaireData'

const Page = async (props: PageFormulaireProps) => {
  const { formulaireGouvernance, persona, retourHref, breadcrumbs } =
    await getPageFormulaireData(props, 'informations-participant')

  if (!persona) {
    throw new Error('informations page: persona is missing')
  }
  const nextEtapeInfo = getEtapeInfo({
    etape: 'perimetre-feuille-de-route',
    gouvernancePersonaId: persona.id,
  })

  const [optionsRegions, optionsDepartements] = await Promise.all([
    prismaClient.region
      .findMany({
        select: {
          code: true,
          nom: true,
        },
        orderBy: {
          nom: 'asc',
        },
      })
      .then((regions) =>
        regions.map(({ code, nom }): OptionTuple => [code, nom]),
      ),
    getDepartementOptions(),
  ])

  return (
    <>
      <div className="fr-container">
        <Breadcrumbs {...breadcrumbs} />
      </div>
      <div className="fr-container fr-container--medium formulaire-gouvernance-no-footer-margin-bottom">
        <BackLink href={retourHref} />

        <ProgressFormulairesFeuillesDeRoute
          progression={1}
          currentTitle={`Renseignez votre ${persona.labelTitle}`}
          nextTitle="Périmètre de votre feuille de route"
        />

        <InformationsParticipants
          formulaireGouvernance={formulaireGouvernance}
          persona={persona}
          optionsRegions={optionsRegions}
          optionsDepartements={optionsDepartements}
          nextEtapePath={nextEtapeInfo.absolutePath}
        />
      </div>
    </>
  )
}

export default Page
