'use server'

import { prismaClient } from '@app/web/prismaClient'

export async function modifierLesCommentairesAction(
  idGouvernance: string,
  commentaireSuivi: string,
  problemeIdentifie: string,
) {
  await prismaClient.gouvernance.update({
    where: {
      id: idGouvernance,
    },
    data: {
      commentaireSuivi,
      problemeIdentifie,
    },
  })
}
