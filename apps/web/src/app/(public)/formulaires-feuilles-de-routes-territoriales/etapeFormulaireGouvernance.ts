import {
  GouvernancePersonaId,
  personaPeutPorterUneFeuilleDeRoute,
} from '@app/web/app/(public)/gouvernance/gouvernancePersona'
import type { GouvernanceFormulaireForForm } from '@app/web/app/(public)/formulaires-feuilles-de-routes-territoriales/getCurrentFormulaireGouvernanceForFormByUser'

export type EtapeFormulaireGouvernance =
  // Choix de la Persona
  | 'choix-du-formulaire'
  // Choix des 2 branches du formulaire si possible (Porter ou Participer)
  | 'porter-ou-participer'
  // Branche "Participer", 1 seule étape
  | 'participer'
  // Branche "Porter", 5 étapes
  | 'informations-participant'
  | 'perimetre-feuille-de-route'
  | 'contacts-collectivites'
  | 'autres-structures'
  | 'recapitulatif'
  // Confirmation du formulaire envoyé, il n'est plus modifiable
  | 'confirmation-formulaire-envoye'

export const etapePathForEtapeFormulaireGouvernance = {
  'choix-du-formulaire': '/choix-du-formulaire',
  'porter-ou-participer': (gouvernancePersona) =>
    `/${gouvernancePersona}/porter-ou-participer`,
  participer: (gouvernancePersona) => `/${gouvernancePersona}/participer`,
  'informations-participant': (gouvernancePersona) =>
    `/${gouvernancePersona}/informations-participant`,
  'perimetre-feuille-de-route': (gouvernancePersona) =>
    `/${gouvernancePersona}/perimetre-feuille-de-route`,
  'contacts-collectivites': (gouvernancePersona) =>
    `/${gouvernancePersona}/contacts-collectivites`,
  'autres-structures': (gouvernancePersona) =>
    `/${gouvernancePersona}/autres-structures`,
  recapitulatif: (gouvernancePersona) => `/${gouvernancePersona}/recapitulatif`,
  'confirmation-formulaire-envoye': (gouvernancePersona) =>
    `/${gouvernancePersona}/confirmation-formulaire-envoye`,
} satisfies {
  [key in EtapeFormulaireGouvernance]:
    | string
    | ((gouvernancePersonaId: GouvernancePersonaId) => string)
}

/**
 * Un formulaire est un "tunnel" d'étapes.
 * L'utilisateur peut généralement revenir à l'étape précédénte, si c'est une étape "autorisée" en fonction du state du formulaire.
 * Sinon il est redirigé vers la page courante de l'étape du formulaire en fonction du state.
 *
 * On utilise des routes  Pour découper le code et permettre de naviguer dans le formulaire.
 * Une page correspond à un état du formulaire.
 */

export type EtapeFormulaireGouvernanceInfo = {
  etape: EtapeFormulaireGouvernance
  etapePath: string
  absolutePath: string
  retour: EtapeFormulaireGouvernance | null
  etapesAccessibles: EtapeFormulaireGouvernance[]
}

const navigationEtapes: (peutPorter: boolean) => {
  [etape in EtapeFormulaireGouvernance]: {
    retour: EtapeFormulaireGouvernance | null
    etapesAccessibles: EtapeFormulaireGouvernance[]
  }
} = (peutPorter) => ({
  'choix-du-formulaire': {
    retour: null,
    etapesAccessibles: [],
  },
  'confirmation-formulaire-envoye': {
    retour: null,
    etapesAccessibles: [],
  },
  'porter-ou-participer': {
    retour: null,
    etapesAccessibles: ['choix-du-formulaire'],
  },
  participer: {
    retour: peutPorter ? 'porter-ou-participer' : null,
    etapesAccessibles: peutPorter
      ? ['choix-du-formulaire', 'porter-ou-participer']
      : ['choix-du-formulaire'],
  },
  'informations-participant': {
    retour: 'porter-ou-participer',
    etapesAccessibles: ['choix-du-formulaire', 'porter-ou-participer'],
  },
  'perimetre-feuille-de-route': {
    retour: 'informations-participant',
    etapesAccessibles: [
      'choix-du-formulaire',
      'porter-ou-participer',
      'informations-participant',
    ],
  },
  'contacts-collectivites': {
    retour: 'perimetre-feuille-de-route',
    etapesAccessibles: [
      'choix-du-formulaire',
      'porter-ou-participer',
      'informations-participant',
      'perimetre-feuille-de-route',
    ],
  },
  'autres-structures': {
    retour: 'contacts-collectivites',
    etapesAccessibles: [
      'choix-du-formulaire',
      'porter-ou-participer',
      'informations-participant',
      'perimetre-feuille-de-route',
      'contacts-collectivites',
    ],
  },
  recapitulatif: {
    retour: 'autres-structures',
    etapesAccessibles: [
      'choix-du-formulaire',
      'porter-ou-participer',
      'informations-participant',
      'perimetre-feuille-de-route',
      'contacts-collectivites',
      'autres-structures',
    ],
  },
})

export const getEtapeInfo = ({
  gouvernancePersonaId,
  etape,
}: {
  gouvernancePersonaId?: GouvernancePersonaId | null
  etape: EtapeFormulaireGouvernance
}): EtapeFormulaireGouvernanceInfo => {
  const etapePath = etapePathForEtapeFormulaireGouvernance[etape]
  const peutPorter =
    !!gouvernancePersonaId &&
    personaPeutPorterUneFeuilleDeRoute(gouvernancePersonaId)

  const navigation = navigationEtapes(peutPorter)[etape]

  if (typeof etapePath === 'string') {
    return {
      etape,
      etapePath,
      absolutePath: `/formulaires-feuilles-de-routes-territoriales${etapePath}`,
      ...navigation,
    }
  }
  if (!gouvernancePersonaId) {
    throw new Error(
      `Impossible de trouver le chemin de l'étape ${etape} sans gouvernancePersonaId`,
    )
  }

  const resolvedEtapePath = etapePath(gouvernancePersonaId)

  return {
    etape,
    etapePath: resolvedEtapePath,
    absolutePath: `/formulaires-feuilles-de-routes-territoriales${resolvedEtapePath}`,
    ...navigation,
  }
}

export type GetEtapeInput = {
  formulaireGouvernance: Pick<
    GouvernanceFormulaireForForm,
    | 'gouvernancePersona'
    | 'intention'
    | 'etapeContacts'
    | 'etapeStructures'
    | 'etapePerimetre'
    | 'etapeInformationsParticipant'
    | 'confirmeEtEnvoye'
  >
  user: {
    gouvernancePersona: string | null
  }
}

export const getEtapeEnCours = ({
  formulaireGouvernance: {
    gouvernancePersona: gouvernancePersonaString,
    etapeContacts,
    etapePerimetre,
    etapeStructures,
    etapeInformationsParticipant,
    intention,
    confirmeEtEnvoye,
  },
  user,
}: GetEtapeInput): EtapeFormulaireGouvernance => {
  const gouvernancePersona = gouvernancePersonaString as GouvernancePersonaId

  // La persona est choisie à l'inscription, mais si elle n'est pas choisie, on redirige vers la page de choix de persona
  // On peut aussi y arriver avec un query param ?changer=1 pour forcer le changement / recommencer un formulaire
  // On peut aussi y arriver si on s'inscrit avec une autre persona que notre persona en cours
  if (!gouvernancePersona || gouvernancePersona !== user.gouvernancePersona) {
    return 'choix-du-formulaire'
  }

  // Le formulaire n'est plus modifiable une fois envoyé, c'est la seule page accessible
  if (confirmeEtEnvoye) {
    return 'confirmation-formulaire-envoye'
  }

  // Choix entre les 2 branches du formulaire (porter ou participer)
  // On peut choisir de porter ou participer si on est dans le cas d'une collectivité plus grande qu'une commune
  const peutPorter = personaPeutPorterUneFeuilleDeRoute(gouvernancePersona)
  if (!intention && peutPorter) {
    return 'porter-ou-participer'
  }

  // Branche "Participer"
  // C'est la seule page de formulaire dans l'intention "Participer"
  if (!peutPorter || intention === 'Participer') {
    return 'participer'
  }

  // Branche "Porter"
  if (!etapeInformationsParticipant) {
    return 'informations-participant'
  }

  if (!etapePerimetre) {
    return 'perimetre-feuille-de-route'
  }

  if (!etapeContacts) {
    return 'contacts-collectivites'
  }

  if (!etapeStructures) {
    return 'autres-structures'
  }

  if (!confirmeEtEnvoye) {
    return 'recapitulatif'
  }

  throw new Error("Impossible de trouver l'étape du formulaire")
}
