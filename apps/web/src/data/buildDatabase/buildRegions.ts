import { output } from '@app/cli/output'
import axios from 'axios'
import { prismaClient } from '@app/web/prismaClient'

export const buildRegions = async () => {
  output('-- Downloading from https://geo.api.gouv.fr...')
  const regions = await axios.get<{ nom: string; code: string }[]>(
    'https://geo.api.gouv.fr/regions',
  )
  output('-- Inserting data...')
  await prismaClient.$transaction([
    prismaClient.region.deleteMany(),
    prismaClient.region.createMany({
      data: regions.data.map(({ code, nom }) => ({
        code,
        nom,
      })),
    }),
  ])
}

export type BuildRegionOutput = Awaited<ReturnType<typeof buildRegions>>
