import type { DemandeDeSubvention, Gouvernance } from '@prisma/client'
import { Decimal } from 'decimal.js'
import {
  getDemandesDeSubventionsForGouvernance,
  getMontantDotationRestante,
} from '@app/web/gouvernance/gouvernanceStatus'

export type StatutDemandeSubvention = 'Non renseigné' | 'En cours' | 'Finalisé'

export const statutsDemandeSubvention = [
  'Non renseigné',
  'En cours',
  'Finalisé',
] as const satisfies StatutDemandeSubvention[]

export type StatutAction = 'Non renseigné' | 'En cours' | 'Envoyé' | 'Validé'

export const statutsAction = [
  'Non renseigné',
  'En cours',
  'Envoyé',
  'Validé',
] as const satisfies StatutAction[]

export type StatutMetadata = 'Non renseigné' | 'Enregistré'

export const statutsMetadata = [
  'Non renseigné',
  'Enregistré',
] as const satisfies StatutMetadata[]

export const getStatutDemandesSubvention = <
  T extends Pick<
    DemandeDeSubvention,
    'valideeEtEnvoyee' | 'subventionDemandee'
  >,
  V extends Pick<
    Gouvernance,
    | 'noteDeContexteSubventions'
    | 'noteDeContexteSubventionsEnregistree'
    | 'beneficiaireDotationFormationEnregistre'
  > & {
    departement: {
      dotation202406: Decimal
    }
    feuillesDeRoute: {
      demandesDeSubvention: T[]
    }[]
    beneficiaireDotationFormation: {
      id: string
    } | null
  },
>(
  gouvernance?: V,
): StatutDemandeSubvention => {
  const demandesDeSubvention =
    getDemandesDeSubventionsForGouvernance(gouvernance)

  const dotationRestante =
    !gouvernance || getMontantDotationRestante(gouvernance).montantRestant.gt(0)

  if (
    !gouvernance?.noteDeContexteSubventionsEnregistree &&
    demandesDeSubvention.length === 0 &&
    !gouvernance?.beneficiaireDotationFormation
  ) {
    return 'Non renseigné'
  }

  return !!gouvernance?.noteDeContexteSubventionsEnregistree &&
    demandesDeSubvention.length > 0 &&
    demandesDeSubvention.every(({ valideeEtEnvoyee }) => !!valideeEtEnvoyee) &&
    !dotationRestante &&
    !!gouvernance?.beneficiaireDotationFormation &&
    !!gouvernance?.beneficiaireDotationFormationEnregistre
    ? 'Finalisé'
    : 'En cours'
}

export const getStatutBeneficiaireFormation = (
  gouvernance?: Pick<Gouvernance, 'beneficiaireDotationFormationEnregistre'>,
): StatutMetadata => {
  if (!gouvernance?.beneficiaireDotationFormationEnregistre) {
    return 'Non renseigné'
  }
  return 'Enregistré'
}

export const getStatutNoteDeContexteSubventions = (
  gouvernance?: Pick<Gouvernance, 'noteDeContexteSubventionsEnregistree'>,
): StatutMetadata => {
  if (!gouvernance?.noteDeContexteSubventionsEnregistree) {
    return 'Non renseigné'
  }
  return 'Enregistré'
}