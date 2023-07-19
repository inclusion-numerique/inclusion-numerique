import { output } from '@app/cli/output'
import axios from 'axios'
import { prismaClient } from '@app/web/prismaClient'

export const buildEpcis = async () => {
  output('-- Downloading from https://geo.api.gouv.fr...')

  const { data: epcis } = await axios.get<
    { nom: string; code: string; population: number }[]
  >('https://geo.api.gouv.fr/epcis?fields=nom,code,population')

  output('-- Inserting data...')

  await prismaClient.$transaction([
    prismaClient.epci.deleteMany(),
    prismaClient.epci.createMany({
      data: epcis.map(({ code, nom, population }) => ({
        code,
        nom,
        population,
      })),
    }),
  ])

  return { codes: new Set(epcis.map(({ code }) => code)) }
}

export type BuildEpcisOutput = Awaited<ReturnType<typeof buildEpcis>>
