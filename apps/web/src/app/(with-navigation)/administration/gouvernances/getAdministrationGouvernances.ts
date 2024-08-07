import { Decimal } from 'decimal.js'
import { prismaClient } from '@app/web/prismaClient'
import {
  getDemandesSubventionsForFormSelect,
  gouvernanceSelect,
  membreSelect,
} from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/getGouvernanceForForm'
import { getDemandesDeSubventionsForGouvernance } from '@app/web/gouvernance/gouvernanceStatus'
import { dotationFormation202406 } from '@app/web/gouvernance/dotationFormation202406'
import {
  getStatutBeneficiaireFormation,
  getStatutDemandesSubvention,
  getStatutNoteDeContexteSubventions,
} from '@app/web/gouvernance/statutDemandesSubvention'
import { getDemandesSubventionCounts } from '@app/web/app/(with-navigation)/administration/gouvernances/getDemandesSubventionCounts'
import { getMembreGouvernanceStringName } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/[gouvernanceId]/demandes-de-subvention/getMembreGouvernanceStringName'

export const getAdministrationGouvernancesData = async () => {
  const rows = await prismaClient.departement.findMany({
    select: {
      code: true,
      nom: true,
      searchable: true,
      region: {
        select: {
          nom: true,
          searchable: true,
        },
      },
      dotation202406: true,
      gouvernancesRemontees: {
        where: {
          v2Enregistree: {
            not: null,
          },
          supression: null,
        },
        select: {
          ...getDemandesSubventionsForFormSelect,
          ...gouvernanceSelect,
          feuillesDeRoute: {
            select: {
              ...getDemandesSubventionsForFormSelect.feuillesDeRoute.select,
              ...gouvernanceSelect.feuillesDeRoute.select,
            },
          },
          beneficiaireDotationFormation: {
            select: membreSelect.select,
          },
          commentaireSuivi: true,
          problemeIdentifie: true,
        },
      },
    },
    orderBy: {
      code: 'asc',
    },
  })

  return rows.map((departement) => {
    const { gouvernancesRemontees, dotation202406 } = departement
    const gouvernance = gouvernancesRemontees[0]
    const demandesSubvention = gouvernance
      ? getDemandesDeSubventionsForGouvernance(gouvernance)
      : []
    const statutDemandesSubvention = getStatutDemandesSubvention(gouvernance)
    const statutBeneficiaireFormation =
      getStatutBeneficiaireFormation(gouvernance)
    const statutNoteDeContexte = getStatutNoteDeContexteSubventions(gouvernance)

    const beneficiaireFormationNom = gouvernance?.beneficiaireDotationFormation
      ? getMembreGouvernanceStringName(
          gouvernance.beneficiaireDotationFormation,
        )
      : null

    const montantDemande = demandesSubvention.reduce(
      (demandesAccumulator, demande) =>
        demandesAccumulator.add(demande.subventionDemandee),
      new Decimal(0),
    )

    const membresCounts = {
      total: gouvernance?.membres.length ?? 0,
      coPorteurs: gouvernance?.pasDeCoporteurs
        ? 0
        : gouvernance?.membres.filter((membre) => membre.coporteur).length ?? 0,
    }

    const feuillesDeRoutesCount = gouvernance?.feuillesDeRoute.length ?? 0

    const dotationIngenierie = dotation202406

    const dotationTotale = dotation202406.add(dotationFormation202406)

    const deduplicatedBeneficiaires = new Set(
      demandesSubvention.flatMap((demande) =>
        demande.beneficiaires.map(
          (beneficiaire) => beneficiaire.membreGouvernance.id,
        ),
      ),
    )

    if (gouvernance?.beneficiaireDotationFormation) {
      deduplicatedBeneficiaires.add(
        gouvernance.beneficiaireDotationFormation.id,
      )
    }

    return {
      departement,
      dotationTotale,
      dotationIngenierie,
      gouvernance,
      demandesSubvention,
      statutDemandesSubvention,
      statutBeneficiaireFormation,
      beneficiaireFormationNom,
      statutNoteDeContexte,
      montantDemande,
      feuillesDeRoutesCount,
      membresCounts,
      deduplicatedBeneficiairesCount: deduplicatedBeneficiaires.size,
      demandesCounts: getDemandesSubventionCounts(demandesSubvention),
    }
  })
}

export type AdministrationGouvernancesDataRow = Awaited<
  ReturnType<typeof getAdministrationGouvernancesData>
>[number]

export const getAdministrationGouvernancesMetadata = (
  data: AdministrationGouvernancesDataRow[],
) => {
  const dotationTotale = data.reduce(
    (accumulator, row) => accumulator.add(row.dotationTotale),
    new Decimal(0),
  )

  const dotationIngenierieTotale = data.reduce(
    (accumulator, row) => accumulator.add(row.dotationIngenierie),
    new Decimal(0),
  )

  const montantDemandeTotal = data.reduce(
    (accumulator, departement) => accumulator.add(departement.montantDemande),
    new Decimal(0),
  )

  const demandesCounts = data.reduce(
    (accumulator, departement) => {
      const { demandesCounts: currentCounts } = departement
      return {
        total: accumulator.total + currentCounts.total,
        enCours: accumulator.enCours + currentCounts.enCours,
        aInstruire: accumulator.aInstruire + currentCounts.aInstruire,
        acceptees: accumulator.acceptees + currentCounts.acceptees,
      }
    },
    {
      total: 0,
      enCours: 0,
      aInstruire: 0,
      acceptees: 0,
    },
  )

  return {
    dotationTotale,
    dotationIngenierieTotale,
    montantDemandeTotal,
    demandesCounts,
  }
}
