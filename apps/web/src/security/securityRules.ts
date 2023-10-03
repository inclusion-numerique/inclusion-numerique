import { SessionUser } from '@app/web/auth/sessionUser'

export const hasAccessToRegionDashboard = (
  user: Pick<SessionUser, 'role' | 'roleScope'>,
  regionCode: string,
) => {
  if (user.role === 'Administrator' || user.role === 'Demo') {
    return true
  }
  if (user.role === 'PrefectureRegion') {
    return user.roleScope === regionCode
  }
  return false
}

export const hasAccessToDepartementDashboard = (
  user: Pick<SessionUser, 'role' | 'roleScope'>,
  {
    departementCode,
    regionCode,
  }: {
    departementCode: string
    regionCode?: string | null
  },
) => {
  if (user.role === 'Administrator' || user.role === 'Demo') {
    return true
  }
  if (user.role === 'PrefectureDepartement') {
    return user.roleScope === departementCode
  }
  if (user.role === 'PrefectureRegion') {
    return !!regionCode && user.roleScope === regionCode
  }
  return false
}

export const hasAccessToAdministration = (user: Pick<SessionUser, 'role'>) =>
  user.role === 'Administrator' || user.role === 'Demo'

export const hasAccessToNationalStatistics = (
  user: Pick<SessionUser, 'role'>,
) => user.role === 'Administrator' || user.role === 'Demo'

export const canAddGouvernancePressentie = (
  user: Pick<SessionUser, 'role' | 'roleScope'>,
  {
    departementCode,
    regionCode,
  }: {
    departementCode: string
    regionCode?: string | null
  },
) => hasAccessToDepartementDashboard(user, { departementCode, regionCode })

export const canEditGouvernancePressentie = (
  user: Pick<SessionUser, 'role' | 'roleScope'>,
  {
    departementCode,
  }: {
    departementCode: string
  },
) =>
  user.role !== 'PrefectureRegion' &&
  hasAccessToDepartementDashboard(user, { departementCode })

export const hasAccessToNationalDashboard = (
  user: Pick<SessionUser, 'role'>,
) => {
  if (user.role === 'Administrator' || user.role === 'Demo') {
    return true
  }
  return false
}

export const hasAccessToDataAnalysis = (user: Pick<SessionUser, 'role'>) => {
  if (user.role === 'Administrator' || user.role === 'Demo') {
    return true
  }

  return false
}

export const hasAccessToGouvernanceForm = (
  user: Pick<SessionUser, 'role' | 'gouvernancePersona'>,
) => {
  if (user.role === 'Administrator' || user.role === 'Demo') {
    return true
  }
  if (
    user.role === 'PrefectureDepartement' ||
    user.role === 'PrefectureRegion'
  ) {
    return false
  }
  return true
}

export const hasAccessToDevelopmentPreview = (
  user: Pick<SessionUser, 'role'>,
) => {
  if (user.role === 'Administrator' || user.role === 'Demo') {
    return true
  }
  return false
}

export const canUpdateFormulaireGouvernance = (
  user: Pick<SessionUser, 'role' | 'formulaireGouvernance'>,
  formulaireGouvernanceId: string,
) => {
  if (user.role === 'Administrator') {
    return true
  }
  return user.formulaireGouvernance?.id === formulaireGouvernanceId
}
