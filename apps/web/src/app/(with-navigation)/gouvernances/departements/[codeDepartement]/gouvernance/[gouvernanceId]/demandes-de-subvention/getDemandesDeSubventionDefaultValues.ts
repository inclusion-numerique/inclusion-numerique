import { DefaultValues } from 'react-hook-form/dist/types/form'
import { DemandeSubventionForForm } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/getGouvernanceForForm'
import { DemandeDeSubventionData } from '@app/web/gouvernance/DemandeDeSubvention'

export const getDemandesDeSubventionDefaultValues = (
  demandeDeSubvention?: DemandeSubventionForForm,
): DefaultValues<DemandeDeSubventionData> => {
  if (!demandeDeSubvention) {
    return {
      id: undefined,
      subventionEtpChecked: false,
      subventionPrestationChecked: false,
    }
  }

  const {
    beneficiaires,
    budgetGlobal,
    subventionDemandee,
    subventionEtp,
    subventionPrestation,
    ...rest
  } = demandeDeSubvention

  return {
    ...rest,
    subventionEtpChecked: !!subventionEtp?.toNumber(),
    subventionPrestationChecked: !!subventionPrestation?.toNumber(),
    budgetGlobal: budgetGlobal?.toNumber(),
    subventionDemandee: subventionDemandee?.toNumber(),
    subventionEtp: subventionEtp?.toNumber(),
    subventionPrestation: subventionPrestation?.toNumber(),
    beneficiaires: beneficiaires.map(({ subvention, ...beneficiaireRest }) => ({
      ...beneficiaireRest,
      subvention: subvention?.toNumber(),
    })),
  }
}
