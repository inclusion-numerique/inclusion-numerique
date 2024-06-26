import { Prisma, IntentionFormulaireGouvernance } from '@prisma/client'
import { generateGouvernanceSelectOptionLabelWithIntention } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/GouvernanceSelectOptionLabelWithIntention'
import { prismaClient } from '@app/web/prismaClient'
import { formulairesTerminesWhere } from '@app/web/app/(with-navigation)/gouvernances/gouvernanceQueryHelpers'
import {
  getActorFromCode,
  getGouvernanceActorCode,
} from '@app/web/gouvernance/GouvernanceActor'
import { GouvernancePersonaId } from '@app/web/app/(public)/gouvernance/gouvernancePersona'

const getIntention = (
  formulaires: { intention: IntentionFormulaireGouvernance | null }[],
): IntentionFormulaireGouvernance =>
  formulaires.some(({ intention }) => intention === 'Porter')
    ? 'Porter'
    : 'Participer'

const firstFormulaireGouvernancePorterOrParticiper = (
  persona: GouvernancePersonaId,
) => ({
  select: {
    id: true,
    intention: true,
  },
  where: {
    AND: [
      formulairesTerminesWhere,
      {
        gouvernancePersona: persona,
      },
    ],
  } satisfies Prisma.FormulaireGouvernanceWhereInput,
  take: 1,
  orderBy: [
    {
      intention: 'desc' as const,
    },
    {
      modification: 'desc' as const,
    },
  ],
})

export const getMembresOptions = async ({
  codeDepartement,
  gouvernanceId,
}: {
  codeDepartement: string
  gouvernanceId: string
}) => {
  const communes = await prismaClient.commune.findMany({
    select: {
      code: true,
      nom: true,
      formulairesGouvernance:
        firstFormulaireGouvernancePorterOrParticiper('commune'),
      membresGouvernances: {
        select: {
          coporteur: true,
        },
        where: {
          gouvernanceId,
        },
      },
    },
    where: {
      departement: {
        code: codeDepartement,
      },
    },
  })

  // Epcis can be in multiple departements / Regions so they are the base for region / departement scopes.

  const epcis = await prismaClient.epci.findMany({
    select: {
      code: true,
      nom: true,
      formulairesGouvernance:
        firstFormulaireGouvernancePorterOrParticiper('epci'),
      membresGouvernances: {
        select: {
          coporteur: true,
        },
        where: {
          gouvernanceId,
        },
      },
    },
    where: {
      communes: {
        some: {
          departement: {
            code: codeDepartement,
          },
        },
      },
    },
  })

  // All departements that have a commune in the epcis
  const departements = await prismaClient.departement.findMany({
    select: {
      code: true,
      nom: true,
      formulairesGouvernance: firstFormulaireGouvernancePorterOrParticiper(
        'conseil-departemental',
      ),
      membresGouvernances: {
        select: {
          coporteur: true,
        },
        where: {
          gouvernanceId,
        },
      },
    },
    where: {
      OR: [
        {
          communes: {
            some: {
              epci: {
                code: {
                  in: epcis.map((epci) => epci.code),
                },
              },
            },
          },
        },
        {
          code: codeDepartement,
        },
      ],
    },
  })

  // All regions that have a departement in the epcis
  const regions = await prismaClient.region.findMany({
    select: {
      code: true,
      nom: true,
      formulairesGouvernance:
        firstFormulaireGouvernancePorterOrParticiper('conseil-regional'),
      membresGouvernances: {
        select: {
          coporteur: true,
        },
        where: {
          gouvernanceId,
        },
      },
    },
    where: {
      departements: {
        some: {
          code: {
            in: departements.map((departement) => departement.code),
          },
        },
      },
    },
  })

  // Structures this is wierd ...

  const structures = await prismaClient.formulaireGouvernance.findMany({
    where: {
      ...formulairesTerminesWhere,
      gouvernancePersona: 'structure',
      departementCode: codeDepartement,
    },
    select: {
      id: true,
      siretStructure: true,
      nomStructure: true,
      intention: true,

      membresGouvernance: {
        select: {
          coporteur: true,
        },
        where: {
          gouvernanceId,
        },
      },
    },
  })

  const optionsRegions = regions
    .filter(({ formulairesGouvernance }) => formulairesGouvernance.length > 0)
    .map(({ code, nom, formulairesGouvernance }) => ({
      label: generateGouvernanceSelectOptionLabelWithIntention({
        label: nom,
        intention: getIntention(formulairesGouvernance),
      }),
      stringLabel: nom,
      value: getGouvernanceActorCode({
        type: 'region',
        code,
        formulaireGouvernanceId: formulairesGouvernance[0].id,
      }),
    }))
  const optionsDepartements = departements
    // Formulaires persona structure has a departement code we need to filter them
    .filter(({ formulairesGouvernance }) => formulairesGouvernance.length > 0)
    .map(({ code, nom, formulairesGouvernance }) => ({
      label: generateGouvernanceSelectOptionLabelWithIntention({
        label: nom,
        intention: getIntention(formulairesGouvernance),
      }),
      stringLabel: nom,
      value: getGouvernanceActorCode({
        type: 'departement',
        code,
        formulaireGouvernanceId: formulairesGouvernance[0].id,
      }),
    }))
  const optionsEpcis = epcis
    .filter(({ formulairesGouvernance }) => formulairesGouvernance.length > 0)
    .map(({ code, nom, formulairesGouvernance }) => ({
      label: generateGouvernanceSelectOptionLabelWithIntention({
        label: nom,
        intention: getIntention(formulairesGouvernance),
      }),
      stringLabel: nom,
      value: getGouvernanceActorCode({
        type: 'epci',
        code,
        formulaireGouvernanceId: formulairesGouvernance[0].id,
      }),
    }))

  const optionsCommunes = communes
    .filter(({ formulairesGouvernance }) => formulairesGouvernance.length > 0)
    .map(({ code, nom, formulairesGouvernance }) => ({
      label: generateGouvernanceSelectOptionLabelWithIntention({
        label: nom,
        intention: getIntention(formulairesGouvernance),
      }),
      stringLabel: nom,
      value: getGouvernanceActorCode({
        type: 'commune',
        code,
        formulaireGouvernanceId: formulairesGouvernance[0].id,
      }),
    }))

  // TODO dedupe par siret + departement
  const optionsStructures = structures.map(
    ({ id, siretStructure, nomStructure, intention }) => ({
      label: generateGouvernanceSelectOptionLabelWithIntention({
        label: nomStructure || siretStructure || '',
        intention: intention ?? 'Participer',
      }),
      stringLabel: nomStructure ?? siretStructure ?? id,
      value: getGouvernanceActorCode({
        type: 'structure',
        code: siretStructure || '',
        formulaireGouvernanceId: id,
      }),
    }),
  )

  return [
    { label: 'Conseil régional', options: optionsRegions },
    { label: 'Conseil départemental', options: optionsDepartements },
    { label: 'EPCI', options: optionsEpcis },
    { label: 'Commune', options: optionsCommunes },
    { label: 'Autres', options: optionsStructures },
  ].filter(({ options }) => options.length > 0)
}

export type MembreOptions = Awaited<ReturnType<typeof getMembresOptions>>

export type MembreOptionGroup = MembreOptions[number]

export type MembreOptionItem = MembreOptionGroup['options'][number]

export const getMembreOptionStringLabel = (
  code: string,
  options: MembreOptions,
) =>
  options
    .flatMap(({ options: subOptions }) => subOptions)
    .find(({ value }) => value === code)?.stringLabel ?? ''

// Edge case if different form by same epci / departement / region
// So we do not check form ids for those types, but we do for structures without a siret
const codeToFilterValue = (code: string) => {
  const {
    code: actorIdentifierCode,
    formulaireGouvernanceId,
    type,
  } = getActorFromCode(code)
  if (
    type === 'structure' &&
    (!actorIdentifierCode || actorIdentifierCode.startsWith('__sans-siret__'))
  ) {
    return `${type}_${formulaireGouvernanceId}`
  }
  return `${type}_${actorIdentifierCode}`
}

export const filterMemberOptions = (
  options: MembreOptions,
  {
    excludeCodes = [],
    onlyCodes = null,
  }: { excludeCodes?: string[]; onlyCodes?: string[] | null },
): MembreOptions => {
  const excludeFilterValues = excludeCodes?.map(codeToFilterValue)
  const onlyFilterValues = onlyCodes?.map(codeToFilterValue)

  return options
    .map(({ label, options: subOptions }) => ({
      label,
      options: subOptions.filter(
        ({ value }) =>
          !excludeFilterValues.includes(codeToFilterValue(value)) &&
          (!onlyFilterValues ||
            onlyFilterValues.includes(codeToFilterValue(value))),
      ),
    }))
    .filter(({ options: subOptions }) => subOptions.length > 0)
}
