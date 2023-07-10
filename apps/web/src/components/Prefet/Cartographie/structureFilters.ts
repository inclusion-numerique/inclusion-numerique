import { Structure } from '@app/web/components/Prefet/structuresData'

export type StructureFilters = {
  typologie: {
    publique: boolean
    association: boolean
    privee: boolean
    nonDefini: boolean

    // Subtypes of public
    commune: boolean
    epci: boolean
    departement: boolean
    autre: boolean
  }
  labels: {
    conseillerNumerique: boolean
    franceServices: boolean
    aidantConnect: boolean
  }
  territoiresPrioritaires: {
    qpv: boolean
    zrr: boolean
  }
}

export const applyStructureFilter = (
  structure: Structure,
  { territoiresPrioritaires, labels, typologie }: StructureFilters,
) => {
  const {
    type,
    cnfsLabel,
    aidantsConnectLabel,
    franceServicesLabel,
    inZrr,
    inQpv,
  } = structure.properties

  // Filtering out main type
  if (type === 'publique' && !typologie.publique) {
    return false
  }
  if (type === 'privee' && !typologie.privee) {
    return false
  }
  if (type === 'association' && !typologie.association) {
    return false
  }

  if (type === null && !typologie.nonDefini) {
    return false
  }

  // TODO Filter out sub types of public type

  // Filtering out labels
  if (cnfsLabel && !labels.conseillerNumerique) {
    return false
  }
  if (aidantsConnectLabel && !labels.aidantConnect) {
    return false
  }
  if (franceServicesLabel && !labels.franceServices) {
    return false
  }

  // Filtering out territoires prioritaires
  if (inZrr && !territoiresPrioritaires.zrr) {
    return false
  }
  if (inQpv && !territoiresPrioritaires.qpv) {
    return false
  }

  return true
}
