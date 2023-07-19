import { createReadStream } from 'node:fs'
import path from 'node:path'
import { Command } from '@commander-js/extra-typings'

import csv from 'csv-parser'
import { getDepartementCodeFromPostalCode } from '@app/web/data/getDepartementCodeFromPostalCode'

const crasCsvFile = path.resolve(
  __dirname,
  '../../../../../var',
  'cras_2023-07-18T10_02_32.583468Z.csv',
)

type CrasCsvRow = {
  ID: 'lXh3nhqCuJThK+d6yExtEQmwWsI3MlfNVSm8YWrCbAk='
  ConseillerId: 'MhMdJCRM6gM3uqEBrTbA2U9jFEOQreVq0jPlBVm+X2o='
  DateAccompagnement: '2021-07-12T11:14:03.177Z'
  NomCommune: 'LESSAY'
  CodePostal: '50430'
  NbParticipants: '1'
  Accompagnement: '{:individuel 0, :atelier 0, :redirection 0}'
  Themes: '["autre"]'
  Statut: '{:etudiant 0, :sansEmploi 0, :enEmploi 0, :retraite 1, :heterogene 0}'
  Activite: 'individuel'
  Moins12ans: '0'
  De12a18ans: '0'
  De18a35ans: '0'
  De35a60ans: '1'
  Plus60ans: '0'
  Duree: '30-60'
  Canal: 'rattachement'
  CreatedAt: '2021-07-12T11:14:03.177Z'
  UpdatedAt: ''
  PermanenceId: ''
  StructureId: 'YQrXOppZjSy6OgqO+XpmJt1EkztFKjCB9MwRBvyH6gM='
}

// e.g. '{:etudiant 0, :sansEmploi 0, :enEmploi 0, :retraite 1, :heterogene 0}'
const transformDict = (mongoDict: string) => {
  const sliced = mongoDict.slice(1, -1)

  // Split the string into key-value pairs
  const parts = sliced.split(', ')

  // Initialize the result object
  const object: Record<string, number> = {}

  // Process each key-value pair
  for (const part of parts) {
    const [key, value] = part.split(' ')
    // Remove the leading colon from the key
    const cleanKey = key.slice(1)
    // Convert the value to a number
    const asNumber = Number.parseInt(value, 10)
    // Add the key-value pair to the result object
    object[cleanKey] = asNumber
  }

  return object
}

const preprocessData = ({
  CodePostal,
  NbParticipants,
  Accompagnement,
  Themes,
  Statut,
  Activite,
  Moins12ans,
  De12a18ans,
  De18a35ans,
  De35a60ans,
  Plus60ans,
}: CrasCsvRow) => ({
  departement: getDepartementCodeFromPostalCode(CodePostal),
  codePostal: CodePostal,
  nParticipants: Number.parseInt(NbParticipants, 10),
  themes: JSON.parse(Themes.replaceAll('" "', '", "')) as string[],
  statut: transformDict(Statut),
  accompagnement: transformDict(Accompagnement),
  activite: Activite,
  moins12ans: Number.parseInt(Moins12ans, 10),
  de12a18ans: Number.parseInt(De12a18ans, 10),
  de18a35ans: Number.parseInt(De18a35ans, 10),
  de35a60ans: Number.parseInt(De35a60ans, 10),
  plus60ans: Number.parseInt(Plus60ans, 10),
})

type Preprocessed = ReturnType<typeof preprocessData>

type Reduced = {
  departement: string
  nParticipants: number
}

type ReducedResult = Map<string, Reduced>

const reduceData = (mapped: Preprocessed[]): ReducedResult => {
  const result = new Map<string, Reduced>()
  for (const data of mapped.values()) {
    let reduced = result.get(data.departement)
    if (!reduced) {
      reduced = {
        departement: data.departement,
        nParticipants: 0,
      }

      result.set(data.departement, reduced)
    }

    reduced.nParticipants += data.nParticipants
  }

  return result
}

export const reduceCras = new Command()
  .command('data:reduce-cras')
  .action(async () => {
    const mapped = await new Promise<Preprocessed[]>((resolve, reject) => {
      const result: Preprocessed[] = []

      createReadStream(crasCsvFile)
        .pipe(csv())
        .on('data', (data: CrasCsvRow) => {
          result.push(preprocessData(data))
        })
        .on('end', () => {
          resolve(result)
        })
        .on('error', reject)
    })
    console.log('COUNT', mapped.length)
  })
