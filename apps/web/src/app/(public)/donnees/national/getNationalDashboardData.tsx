/* eslint no-plusplus: 0 */
import {
  BoxData,
  BoxesData,
} from '@app/web/app/(public)/donnees/getDashboardData'
import { prismaClient } from '@app/web/prismaClient'
import { countStructuresForDashboard } from '@app/web/components/Dashboard/Cartographie/countStructures'
import { getTopCrasTypes } from '@app/web/components/Dashboard/Cartographie/getTopCrasTypes'
import { getAppData } from '@app/web/data/appData'
import { aggregateConumCras } from '@app/web/data/aggregateConumCras'

const computeNationalDashboardData = async () => {
  /**
   * We are using basic prisma queries and counting programmatically to provide type safety.
   * It would be more performant and less verbose to use SQL COUNT with filters.
   * But the query would be less readable.
   */
  const [countCoconums, structures, conumCrasList, conums, appData] =
    await Promise.all([
      prismaClient.coordinateurConseillerNumerique.count(),
      prismaClient.structureCartographieNationale.findMany({
        select: {
          id: true,
          type: true,
          sousTypePublic: true,
          labelAidantsConnect: true,
          labelFranceServices: true,
          labelConseillersNumerique: true,
          structureAidantsConnect: true,
          zrr: true,
          qpv: true,
        },
      }),
      prismaClient.craConseillerNumeriqueParDepartement.findMany({}),
      prismaClient.conseillerNumerique.count(),
      getAppData(),
    ])

  // Aggregate all conumCras
  const conumCras = aggregateConumCras(conumCrasList)

  const structuresCount = countStructuresForDashboard(structures)

  const inclusionLocations = {
    id: 'lieux-d-inclusion-numérique',
    label: "Lieux d'inclusion numérique",
    withDescription: true,
    value: structuresCount.structures.total,
    statistics: [
      {
        id: 'typologie-de-structures',
        label: 'Typologie des lieux d’inclusion numérique',
        statistics: [
          {
            id: 'public',
            label: 'Public',
            value: structuresCount.structures.type.publique,
            collapsable: true,
            statistics: [
              {
                id: 'Commune',
                label: 'Commune',
                value: structuresCount.structures.sousTypePublic.commune,
              },
              {
                id: 'EPCI',
                label: 'EPCI',
                value: structuresCount.structures.sousTypePublic.epci,
              },
              {
                id: 'Departement',
                label: 'Departement',
                value: structuresCount.structures.sousTypePublic.departement,
              },
              {
                id: 'Autre',
                label: 'Autre',
                value: structuresCount.structures.sousTypePublic.autre,
              },
            ],
          },
          {
            id: 'Associations',
            label: 'Associations',
            value: structuresCount.structures.type.association,
          },
          {
            id: 'Autres acteurs privés',
            label: 'Autre acteurs privés',
            value: structuresCount.structures.type.privee,
          },
          {
            id: 'Non défini',
            label: 'Non défini',
            value: structuresCount.structures.type.nonDefini,
          },
        ],
      },
      {
        id: 'labels',
        label: 'Labels',
        statistics: [
          {
            id: 'lieux-accueillant-des-conseillers-numerique',
            label: 'Lieux accueillant des conseillers numérique',
            value: structuresCount.structures.label.conseillerNumerique,
          },
          {
            id: 'points-d-accueil-numerique-labellises-france-services',
            label: 'Points d’accueil numérique labellisés France services',
            value: structuresCount.structures.label.franceServices,
          },
          {
            id: 'points-d-accueil-habilites-aidants-connect',
            label: 'Points d’accueil habilités Aidants Connect',
            value: structuresCount.structures.label.aidantsConnect,
          },
        ],
      },
      {
        id: 'territoires-prioritaires',
        label: 'Territoires prioritaires',
        statistics: [
          {
            id: 'structures-en-quartier-prioritaire-de-la-ville-qpv',
            label: 'Structures en quartier prioritaire de la ville (QPV)',
            value: structuresCount.structures.territoire.qpv,
          },
          {
            id: 'structures-en-zone-de-revitalisation-rurale-zrr',
            label: 'Structures en zone de revitalisation rurale (ZRR)',
            value: structuresCount.structures.territoire.zrr,
          },
        ],
      },
    ],
  } satisfies BoxData

  const aidantConnectLocations = {
    id: 'aidants-numériques-identifiés',
    label: 'Aidants Numériques identifiés',
    value: conums + structuresCount.aidantsConnect.aidants,
    statistics: [
      {
        id: 'conseillers',
        statistics: [
          {
            id: 'conseillers-numériques',
            label: 'Conseillers Numériques',
            value: conums,
          },
          {
            id: 'dont Conseillers Coordinateurs',
            label: 'dont Conseillers Coordinateurs',
            info: 'coordinateursConseillerNumerique',
            value: countCoconums,
          },
          {
            id: 'aidants-habilités-à-aidant-connect',
            label: 'Aidants habilités à Aidant connect',
            value: structuresCount.aidantsConnect.aidants,
          },
        ],
      },
    ],
  } satisfies BoxData

  const main = { inclusionLocations, aidantConnectLocations }

  const totalAccompagnementsConum = conumCras
    ? conumCras.ageMoins12ans +
      conumCras.age12a18ans +
      conumCras.age18a35ans +
      conumCras.age35a60ans +
      conumCras.agePlus60ans
    : 0

  const accompagnementConumPercentage = (value?: number) => {
    if (!conumCras) {
      return 0
    }
    return (100 * (value ?? 0)) / totalAccompagnementsConum
  }

  const publicsAccompagnes = {
    id: 'publics-accompagnés',
    label: `Publics accompagnés`,
    boxes: [
      {
        id: 'usagers-accompagnés',
        label: 'Usagers accompagnés',
        value:
          (conumCras?.usagers ?? 0) +
          structuresCount.aidantsConnect.usagersUniques,
        statistics: [
          {
            id: 'par-des-conseillers-numériques',
            label: 'Par des Conseillers Numériques',
            value: conumCras?.usagers ?? 0,
            updated: appData.dataUpdated,
            source: 'conseiller-numerique.gouv.fr',
          },
          {
            id: 'par-des-aidants-habilités-à-aidants-connect',
            label: 'Par des Aidants habilités à Aidants Connect',
            value: structuresCount.aidantsConnect.usagersUniques,
            updated: appData.dataUpdated,
            source: 'aidantsconnect.beta.gouv.fr',
          },
        ],
      },
      {
        id: 'âge-des-usagers',
        label: 'Âge des usagers',
        updated: appData.dataUpdated,
        source: 'conseiller-numerique.gouv.fr',
        statistics: [
          {
            id: '60',
            label: '60 ans et plus',
            value: accompagnementConumPercentage(conumCras?.agePlus60ans),
          },
          {
            id: '30',
            label: '35-60 ans',
            value: accompagnementConumPercentage(conumCras?.age35a60ans),
          },
          {
            id: '18',
            label: '18-35 ans',
            value: accompagnementConumPercentage(conumCras?.age18a35ans),
          },
          {
            id: '12',
            label: '12-18 ans',
            value: accompagnementConumPercentage(conumCras?.age12a18ans),
          },
          {
            id: '-12',
            label: 'Moins de 12 ans',
            value: accompagnementConumPercentage(conumCras?.ageMoins12ans),
          },
        ],
      },
      {
        id: 'statut-des-usagers',
        label: 'Statut des usagers',
        updated: appData.dataUpdated,
        source: 'conseiller-numerique.gouv.fr',
        statistics: [
          {
            id: 'nr',
            label: 'Non renseigné',
            value: accompagnementConumPercentage(conumCras?.statutHeterogene),
          },
          {
            id: 'retraite',
            label: 'Retraité',
            value: accompagnementConumPercentage(conumCras?.statutRetraite),
          },
          {
            id: 'en-emploi',
            label: 'En emploi',
            value: accompagnementConumPercentage(conumCras?.statutEnEmploi),
          },
          {
            id: 'sans-emploi',
            label: 'Sans emploi',
            value: accompagnementConumPercentage(conumCras?.statutSansEmploi),
          },
          {
            id: 'scolarisee',
            label: 'Scolarisé(e)',
            value: accompagnementConumPercentage(conumCras?.statutEtudiant),
          },
        ],
      },
    ],
  } satisfies BoxesData

  const top4CraThemes = getTopCrasTypes(conumCras)

  const accompagnements = {
    id: 'accompagnements',
    label: `Accompagnements`,
    boxes: [
      {
        id: 'accompagnements',
        label: 'Accompagnements',
        value:
          (conumCras?.accompagnements ?? 0) +
          structuresCount.aidantsConnect.totalDemarches,
        statistics: [
          {
            id: 'accompagnements-de-médiation-numérique',
            label: 'Accompagnements de médiation numérique',
            value: conumCras?.accompagnements ?? 0,
            updated: appData.dataUpdated,
            source: 'conseiller-numerique.gouv.fr',
          },
          {
            id: 'accompagnements-pour-réaliser-des-démarches-en-lignes',
            label: 'Accompagnements pour réaliser des démarches en lignes',
            value: structuresCount.aidantsConnect.totalDemarches,
            updated: appData.dataUpdated,
            source: 'aidantsconnect.beta.gouv.fr',
          },
        ],
      },
      {
        id: 'accompagnements-de-médiation-numérique',
        label:
          'Les 4 principaux thèmes d’accompagnements de médiation numérique',
        updated: appData.dataUpdated,
        source: 'conseiller-numerique.gouv.fr',
        statistics: top4CraThemes.top4.map(({ label, count }) => ({
          id: label,
          label,
          value: (100 * count) / top4CraThemes.total,
        })),
      },
      {
        id: 'réaliser-des-démarches-en-lignes',
        label:
          'Les 4 principaux thèmes d’accompagnements pour réaliser des démarches en lignes',
        updated: appData.dataUpdated,
        source: 'aidantsconnect.beta.gouv.fr',
        statistics: structuresCount.aidantsConnect.top4AndOther.map(
          ({ label, count }) => ({
            id: label,
            label,
            value:
              (100 * count) / structuresCount.aidantsConnect.totalDemarches,
          }),
        ),
      },
    ],
  } satisfies BoxesData

  const detailed = { publicsAccompagnes, accompagnements }

  return { main, detailed }
}
