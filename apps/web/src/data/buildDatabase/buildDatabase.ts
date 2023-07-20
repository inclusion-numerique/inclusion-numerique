import { output } from '@app/cli/output'
import { buildRegions } from '@app/web/data/buildDatabase/buildRegions'
import { buildDepartements } from '@app/web/data/buildDatabase/buildDepartements'
import { buildEpcis } from '@app/web/data/buildDatabase/buildEpcis'
import { buildCommunes } from '@app/web/data/buildDatabase/buildCommunes'
import { buildStructuresCartographieNationale } from '@app/web/data/buildDatabase/buildStructuresCartographieNationale'
import { buildStructuresAidantsConnect } from '@app/web/data/buildDatabase/buildStructuresAidantsConnect'
import { buildPermanencesConum } from '@app/web/data/buildDatabase/buildPermanencesConum'
import { buildIfn } from '@app/web/data/buildDatabase/buildIfn'
import { buildCoordinateursConum } from '@app/web/data/buildDatabase/buildCoordinateursConum'
import { buildConumCras } from '@app/web/data/buildDatabase/buildConumCras'

export const buildDatabase = async () => {
  output(
    'Building database from geo data, data inclusion, mednum, conum and aidantsconnect',
  )

  output('Building regions...')
  await buildRegions()

  output('Building departements...')
  const departements = await buildDepartements()

  output('Building epcis...')
  const epcis = await buildEpcis()

  output('Building communes...')
  const communes = await buildCommunes({ departements, persist: false })

  output('Building structures cartographie nationale...')
  const structuresCartographieNationale =
    await buildStructuresCartographieNationale({ communes })

  output('Building structures Aidants connect...')
  await buildStructuresAidantsConnect({ structuresCartographieNationale })

  output('Building permanences Conseillers numerique...')
  await buildPermanencesConum({ structuresCartographieNationale })

  output('Building IFN...')
  await buildIfn({ epcis, communes })

  output('Building Conum Cras...')
  await buildConumCras({ departements })

  output('Building coordination conums...')
  await buildCoordinateursConum()
}
