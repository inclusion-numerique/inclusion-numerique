import type { BesoinSubvention } from '@prisma/client'
import { SelectOptionGroup } from '@app/ui/components/Form/utils/options'

export const besoinSubventionLabel: { [value in BesoinSubvention]: string } = {
  EtablirUnDiagnosticTerritorial: 'Établir un diagnostic territorial',
  CoConstruireLaFeuilleDeRoute:
    'Co-construire la feuille de route avec les acteurs du territoire',
  RedigerLaFeuilleDeRoute: 'Rédiger la feuille de route',
  AppuiJuridique: 'Appui juridique dédié à la gouvernance',
  StructurerUnFonds: 'Structurer un fonds local pour l’inclusion numérique',
  MonterDossiersDeSubvention:
    'Monter des dossiers de subvention complexes (ex : FSE)',
  AnimerLaGouvernance:
    'Animer et mettre en œuvre la gouvernance et la feuille de route',
  StructurerUneFiliereDeReconditionnement:
    'Structurer une filière de reconditionnement locale',
  CollecterDesDonneesTerritoriales:
    "Collecter des données territoriales pour alimenter un hub national de données relatives à l'inclusion numérique",
  SensibiliserLesActeursAuxOutilsExistants:
    'Sensibiliser les acteurs de l’inclusion numérique aux outils existants (PIX, La Base…)',
  AppuyerLaCertificationQualiopi:
    'Appuyer la certification Qualiopi de structures privées portant des formations à l’inclusion numérique',
}

export const besoinSubventionCategories = [
  {
    name: 'Besoins relatif à la formalisation des feuilles de route',
    options: [
      'EtablirUnDiagnosticTerritorial',
      'CoConstruireLaFeuilleDeRoute',
      'RedigerLaFeuilleDeRoute',
      'AppuiJuridique',
    ],
  },
  {
    name: 'Besoins relatif au financement du déploiement de la/des feuille(s) de route',
    options: [
      'StructurerUnFonds',
      'MonterDossiersDeSubvention',
      'AnimerLaGouvernance',
    ],
  },
  {
    name: "Besoin relatifs à l'outillage des acteurs de votre territoire",
    options: [
      'StructurerUneFiliereDeReconditionnement',
      'CollecterDesDonneesTerritoriales',
      'SensibiliserLesActeursAuxOutilsExistants',
    ],
  },
  {
    name: "Besoins relatifs à la formation des professionnels de l'inclusion numérique",
    options: ['AppuyerLaCertificationQualiopi'],
  },
] as const satisfies {
  name: string
  options: BesoinSubvention[]
}[]

export const besoinSubventionOptions: SelectOptionGroup<BesoinSubvention>[] =
  besoinSubventionCategories.map(({ name, options }) => ({
    name,
    options: options.map((option) => ({
      name: besoinSubventionLabel[option],
      value: option,
    })),
  }))