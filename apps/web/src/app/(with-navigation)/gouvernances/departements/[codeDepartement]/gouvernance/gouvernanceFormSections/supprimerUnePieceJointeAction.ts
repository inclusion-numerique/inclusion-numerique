'use server'

import { DeleteObjectCommand } from '@aws-sdk/client-s3'
import { prismaClient } from '@app/web/prismaClient'
import { s3 } from '@app/web/server/s3/s3'
import { ServerWebAppConfig } from '@app/web/ServerWebAppConfig'

export async function supprimerUnePieceJointeAction(
  idFeuilleDeRoute: string,
  idUpload: string,
) {
  await prismaClient.$transaction(async (transaction) => {
    await transaction.feuilleDeRoute.update({
      where: {
        id: idFeuilleDeRoute,
      },
      data: {
        pieceJointe: null,
      },
    })

    await transaction.upload.delete({
      where: {
        key: idUpload,
      },
    })

    await s3.send(
      new DeleteObjectCommand({
        Bucket: ServerWebAppConfig.S3.uploadsBucket,
        Key: idUpload,
      }),
    )
  })
}
