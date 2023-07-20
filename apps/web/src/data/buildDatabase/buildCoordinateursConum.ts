import { output } from '@app/cli/output'
import { getConumCoordinateurs } from '@app/web/data/conumCoordinateurs'

export const buildCoordinateursConum = async () => {
  output(
    '-- Getting data from local json // https://api.conseiller-numerique.gouv.fr/coordinateurs...',
  )

  const coordinateurs = await getConumCoordinateurs()

  output(`-- Preparing data (${coordinateurs.length})...`)

  // const permanenceData: Prisma.PermanenceConseillerNumeriqueCreateManyInput[] =
  //   []
  //
  // // Deduplicated conseillers from coordinations
  // const conseillerNumeriqueData = new Map<
  //   string,
  //   Prisma.ConseillerNumeriqueCreateManyInput
  // >()
  //
  // // Explicit many to many
  // const conseillersEnPermanenceData: Prisma.ConseillerNumeriqueEnPermanenceCreateManyInput[] =
  //   []
  //
  // for (const permanence of coordinations) {
  //   let errors: Record<string, string> | undefined
  //
  //   const structureCartographieNationaleId =
  //     structuresCartographieNationale.byConumPermanenceId.get(permanence.id)
  //
  //   if (!structureCartographieNationaleId) {
  //     errors = {}
  //
  //     errors.structureCartographieNationaleId = `Introuvable dans data inclusion ${JSON.stringify(
  //       {
  //         nom: permanence.nom,
  //         adresse: permanence.adresse,
  //         commune: permanence.commune,
  //         code_postal: permanence.code_postal,
  //         structureNom: permanence.structureNom,
  //         structureId: permanence.structureId,
  //         pivot: permanence.pivot,
  //       },
  //     )}`
  //   }
  //
  //   permanenceData.push({
  //     id: permanence.id,
  //     structureCartographieNationaleId,
  //     errors,
  //   })
  //
  //   for (const conseiller of permanence.aidants) {
  //     conseillerNumeriqueData.set(conseiller.aidantId, {
  //       id: conseiller.aidantId,
  //     })
  //     conseillersEnPermanenceData.push({
  //       conseillerNumeriqueId: conseiller.aidantId,
  //       permanenceId: permanence.id,
  //     })
  //   }
  // }
  //
  // output('-- Inserting data...')
  // await prismaClient.$transaction([
  //   prismaClient.conseillerNumeriqueEnPermanence.deleteMany(),
  //   prismaClient.conseillerNumerique.deleteMany(),
  //   prismaClient.permanenceConseillerNumerique.deleteMany(),
  //   prismaClient.permanenceConseillerNumerique.createMany({
  //     data: permanenceData,
  //   }),
  //   prismaClient.conseillerNumerique.createMany({
  //     data: [...conseillerNumeriqueData.values()],
  //   }),
  //   prismaClient.conseillerNumeriqueEnPermanence.createMany({
  //     data: conseillersEnPermanenceData,
  //   }),
  // ])
}

export type BuildCoordinateursConumOutput = Awaited<
  ReturnType<typeof buildCoordinateursConum>
>
