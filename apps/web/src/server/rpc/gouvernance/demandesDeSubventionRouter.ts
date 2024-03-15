import { v4 } from 'uuid'
import type { Prisma } from '@prisma/client'
import sanitizeHtml from 'sanitize-html'
import { protectedProcedure, router } from '@app/web/server/rpc/createRouter'
import { prismaClient } from '@app/web/prismaClient'
import { notFoundError } from '@app/web/server/rpc/trpcErrors'
import { checkSecurityForGouvernanceMutation } from '@app/web/server/rpc/gouvernance/gouvernanceSecurity'
import {
  DeleteDemandeDeSubventionValidation,
  DemandeDeSubventionValidation,
  NoteDeContexteSubventionsValidation,
} from '@app/web/gouvernance/DemandeDeSubvention'

export const demandesDeSubventionRouter = router({
  updateNoteDeContexteSubventions: protectedProcedure
    .input(NoteDeContexteSubventionsValidation)
    .mutation(
      async ({
        input: { gouvernanceId, noteDeContexteSubventions },
        ctx: { user },
      }) => {
        const gouvernance = await prismaClient.gouvernance.findUnique({
          where: {
            id: gouvernanceId,
          },
          select: {
            id: true,
            departementCode: true,
          },
        })

        if (!gouvernance) {
          throw notFoundError()
        }

        await checkSecurityForGouvernanceMutation(
          user,
          gouvernance.departementCode,
        )

        const result = await prismaClient.gouvernance.update({
          where: {
            id: gouvernance.id,
          },
          data: {
            noteDeContexteSubventions: sanitizeHtml(noteDeContexteSubventions),
            noteDeContexteSubventionsEnregistree: new Date(),
            derniereModificationParId: user.id,
            modification: new Date(),
          },
        })

        return result
      },
    ),
  createOrUpdate: protectedProcedure
    .input(DemandeDeSubventionValidation)
    .mutation(
      async ({
        input: {
          id: inputId,
          feuilleDeRouteId,
          nomAction,
          contexte,
          description,
          budgetGlobal,
          pieceJointeBudgetKey,
          subventionDemandee,
          subventionEtp,
          subventionPrestation,
          beneficiaires,
        },
        ctx: { user },
      }) => {
        const gouvernance = await prismaClient.gouvernance.findFirst({
          where: {
            feuillesDeRoute: { some: { id: feuilleDeRouteId } },
          },
          select: {
            id: true,
            departementCode: true,
            besoinsEnIngenierieFinanciereId: true,
          },
        })

        if (!gouvernance) {
          throw notFoundError()
        }

        await checkSecurityForGouvernanceMutation(
          user,
          gouvernance.departementCode,
        )

        const id = inputId ?? v4()

        const data = {
          derniereModificationParId: user.id,
          modification: new Date(),
          feuilleDeRouteId,
          nomAction,
          contexte,
          description,
          budgetGlobal,
          pieceJointeBudgetKey,
          subventionDemandee,
          subventionEtp,
          subventionPrestation,
        } satisfies Omit<
          Prisma.DemandeDeSubventionUncheckedCreateInput,
          'id' | 'createurId'
        >

        // We wipe and recreate beneficiaires to avoid complex logic for updating beneficiaires array

        const result = await prismaClient.$transaction(async (transaction) => {
          const demandeDeSubvention =
            await transaction.demandeDeSubvention.upsert({
              where: {
                id,
              },
              create: {
                id,
                createurId: user.id,
                ...data,
              },
              update: {
                ...data,
              },
            })

          await transaction.beneficiaireSubvention.deleteMany({
            where: {
              demandeDeSubventionId: id,
            },
          })

          await transaction.beneficiaireSubvention.createMany({
            data: beneficiaires.map((beneficiaire) => ({
              id: v4(),
              demandeDeSubventionId: id,
              membreGouvernanceId: beneficiaire.membreGouvernanceId,
              subvention: beneficiaire.subvention,
            })),
          })

          return demandeDeSubvention
        })

        return result
      },
    ),

  delete: protectedProcedure
    .input(DeleteDemandeDeSubventionValidation)
    .mutation(async ({ input: { id }, ctx: { user } }) => {
      const gouvernance = await prismaClient.gouvernance.findFirst({
        where: {
          feuillesDeRoute: {
            some: {
              demandesDeSubvention: {
                some: {
                  id,
                },
              },
            },
          },
        },
        select: {
          id: true,
          departementCode: true,
        },
      })

      if (!gouvernance) {
        throw notFoundError()
      }

      await checkSecurityForGouvernanceMutation(
        user,
        gouvernance.departementCode,
      )

      await prismaClient.demandeDeSubvention.delete({
        where: {
          id,
        },
      })

      return { id }
    }),
})