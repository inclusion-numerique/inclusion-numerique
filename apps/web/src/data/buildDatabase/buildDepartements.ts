import { output } from '@app/cli/output'
import axios from 'axios'
import { getGeoDepartements } from '@app/web/data/geoDepartements'
import { prismaClient } from '@app/web/prismaClient'

export const buildDepartements = async () => {
  output('-- Downloading from https://geo.api.gouv.fr...')

  // We have 2 sources for departements:
  // INSEE (for metropolitan and dom) and Geo API (for non - dom)
  const { data: geoApiDepartements } = await axios.get<
    { code: string; nom: string; codeRegion: string }[]
  >('https://geo.api.gouv.fr/departements?fields=code,nom,codeRegion,geometry')

  const byCode = new Map(
    geoApiDepartements.map((departement) => [departement.code, departement]),
  )

  output('-- Getting geo data from json file ...')

  const departementsGeometry = await getGeoDepartements()

  output('-- Preparing data ...')

  // There is more departements geometry than geo api departements (e.g. dep 975)
  const data = departementsGeometry.features.map((feature) => {
    const code = feature.properties.DDEP_C_COD

    const geoApiDepartement = byCode.get(code)

    if (geoApiDepartement) {
      return {
        ...geoApiDepartement,
        geometry: feature.geometry,
      }
    }

    return {
      code,
      nom: feature.properties.DDEP_L_LIB,
      codeRegion: null,
      geometry: feature.geometry,
    }
  })
  output('-- Inserting data...')

  await prismaClient.$transaction([
    prismaClient.departement.deleteMany(),
    prismaClient.departement.createMany({
      data,
    }),
  ])

  return { codes: new Set(data.map(({ code }) => code)) }
}

export type BuildDepartementsOutput = Awaited<
  ReturnType<typeof buildDepartements>
>
