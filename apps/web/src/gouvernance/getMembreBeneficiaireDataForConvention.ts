import Decimal from 'decimal.js'
import { prismaClient } from '@app/web/prismaClient'
import { membreSelect } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/getGouvernanceForForm'
import { getMembreGouvernanceStringName } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/[gouvernanceId]/demandes-de-subvention/getMembreGouvernanceStringName'
import { getAdministrationBeneficiairesSubventionsData } from '@app/web/app/(with-navigation)/administration/beneficiaires-subventions/getAdministrationBeneficiairesSubventions'
import { besoinSubventionLabel } from '@app/web/gouvernance/besoinSubvention'
import { decimalToWords } from '@app/web/utils/decimalToWords'
import { stripHtmlTags } from '@app/web/utils/stripHtmlTags'

export const getMembreBeneficiaireDataForConvention = async (
  membreGouvernanceId: string,
) => {
  const membre = await prismaClient.membreGouvernance.findUnique({
    where: {
      id: membreGouvernanceId,
    },
    select: {
      ...membreSelect.select,
      gouvernance: {
        select: {
          id: true,
          departement: {
            select: {
              code: true,
              nom: true,
            },
          },
        },
      },
      beneficiaireSubventions: {
        select: {
          id: true,
          subvention: true,
          demandeDeSubvention: {
            select: {
              nomAction: true,
              contexte: true,
              besoins: true,
              description: true,
              feuilleDeRoute: true,
              budgetGlobal: true,
              subventionDemandee: true,
              id: true,
            },
          },
        },
        where: {
          demandeDeSubvention: {
            OR: [
              {
                valideeEtEnvoyee: {
                  not: null,
                },
              },
              {
                acceptee: {
                  not: null,
                },
              },
            ],
          },
        },
      },
      beneficiaireDotationFormation: {
        select: {
          id: true,
        },
        where: {
          OR: [
            {
              beneficiaireDotationFormationValideEtEnvoye: {
                not: null,
              },
            },
            {
              beneficiaireDotationFormationAccepte: {
                not: null,
              },
            },
          ],
        },
      },
    },
  })

  if (!membre) {
    return null
  }

  const [data] = await getAdministrationBeneficiairesSubventionsData({
    membreId: membre.id,
    forConvention: true,
  })

  if (!data) {
    throw new Error('No data found for beneficiaire')
  }

  return {
    membre,
    beneficiaireFormation: !!membre.beneficiaireDotationFormation,
    nom: getMembreGouvernanceStringName(membre),
    subventionIngenierie: data.subventionIngenierie,
    subventionFormation: data.subventionFormation,
    subventionTotal: data.subventionTotal,
    budgetGlobal: data.budgetGlobal,
  }
}

export type MembreBeneficiaireDataForConvention = Exclude<
  Awaited<ReturnType<typeof getMembreBeneficiaireDataForConvention>>,
  null
>

type DemandeDeSubvention = Readonly<{
  feuillesDeRoute: ReadonlyArray<{
    demandesDeSubvention: ReadonlyArray<{
      beneficiaires: ReadonlyArray<{
        membreGouvernance: {
          formulaireGouvernanceId: string
        }
        subvention: Decimal
      }>
      budgetGlobal: Decimal
      nomAction: string
    }>
  }>
  departement: {
    dotation202406: Decimal
  }
}>

export const postProcessMembreBeneficiaireDataForConvention = (
  data: MembreBeneficiaireDataForConvention,
  demandesDeSubvention2: DemandeDeSubvention | null,
) => {
  const dotationsIngenieries =
    demandesDeSubvention2?.feuillesDeRoute[0].demandesDeSubvention
      .filter((feuilleDeRoute) => {
        const beneficiaires = feuilleDeRoute.beneficiaires.filter(
          (beneficiaire) =>
            beneficiaire.membreGouvernance.formulaireGouvernanceId ===
            data.membre.formulaireGouvernanceId,
        )

        return beneficiaires.length > 0
      })
      .map((feuilleDeRoute) => {
        const montantGlobal = feuilleDeRoute.budgetGlobal
        const montant = feuilleDeRoute.beneficiaires
          .filter(
            (beneficiaire) =>
              beneficiaire.membreGouvernance.formulaireGouvernanceId ===
              data.membre.formulaireGouvernanceId,
          )
          .map((beneficiaire) => beneficiaire.subvention)[0]

        return {
          nomAction: feuilleDeRoute.nomAction,
          montant,
          montantGlobal: decimalToWords(montantGlobal),
          pourcentage: (
            (montant.toNumber() / montantGlobal.toNumber()) *
            100
          ).toFixed(2),
        }
      })

  const dotationIngenierieGlobal = dotationsIngenieries?.reduce(
    (t, dotationIngenierie) => t + Number(dotationIngenierie.montant),
    0,
  )

  // Actions and besoins for convention
  const demandesDeSubvention = data.membre.beneficiaireSubventions
    .map((beneficiaire) => beneficiaire.demandeDeSubvention)
    .map(
      ({
        nomAction,
        contexte,
        besoins,
        description,
        feuilleDeRoute,
        budgetGlobal,
        subventionDemandee,
      }) => ({
        nomAction,
        // contexte: htmlToOdf(contexte),
        contexte: stripHtmlTags(contexte),
        besoins,
        description: stripHtmlTags(description).replaceAll('&nbsp;', ' '),
        feuilleDeRoute,
        budgetGlobalActionWords: decimalToWords(budgetGlobal),
        subventionDemandee,
        pourcentage: subventionDemandee.div(budgetGlobal).times(100),
      }),
    )

  const besoins = [...new Set(demandesDeSubvention.flatMap((d) => d.besoins))]
    .map((besoin) => besoinSubventionLabel[besoin])
    .sort((a, b) => a.localeCompare(b))

  return {
    ...data,
    subventionIngenierieWords: decimalToWords(data.subventionIngenierie),
    subventionFormationWords: data.subventionFormation
      ? decimalToWords(data.subventionFormation)
      : '',
    subventionTotalWords: decimalToWords(data.subventionTotal),
    budgetGlobalWords: decimalToWords(data.budgetGlobal),
    subventionIngenieriePercentageOfBudget: data.budgetGlobal.isZero()
      ? '0'
      : data.subventionIngenierie
          .div(data.budgetGlobal)
          .times(100)
          .toPrecision(2),

    besoins,
    demandesDeSubvention,
    dotationsIngenieries,
    dotationIngenierieGlobal,
    dotationIngenierieGlobalWords: dotationIngenierieGlobal
      ? decimalToWords(new Decimal(dotationIngenierieGlobal))
      : '',
  }
}

export type MembreBeneficiaireDataForConventionPostProcessed = ReturnType<
  typeof postProcessMembreBeneficiaireDataForConvention
>
