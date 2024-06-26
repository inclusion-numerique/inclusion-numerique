import { getAppData } from '@app/web/data/appData'
import { prismaClient } from '@app/web/prismaClient'

// Raw query to avoid N queries for counts
export const getGouvernancesCounts = () =>
  prismaClient.$queryRaw<
    {
      membres: number
      gouvernances: number
      regions: number
      departements: number
      epcis: number
      communes: number
      structures: number
    }[]
  >`
      SELECT COUNT(membre_gouvernance.id)                                                               AS membres,
             COUNT(DISTINCT CASE WHEN gouvernances.v2_enregistree IS NOT NULL THEN gouvernances.id END) AS gouvernances,
             COUNT(DISTINCT membre_gouvernance.region_code)                                             AS regions,
             COUNT(membre_gouvernance.id)                                                                  FILTER (WHERE membre_gouvernance.departement_code IS NOT NULL) AS departements, COUNT(membre_gouvernance.id) FILTER (WHERE membre_gouvernance.commune_code IS NOT NULL) AS communes, COUNT(membre_gouvernance.id) FILTER (WHERE membre_gouvernance.epci_code IS NOT NULL) AS epcis, COUNT(membre_gouvernance.id) FILTER (WHERE membre_gouvernance.siret IS NOT NULL) AS structures
      FROM membre_gouvernance
               RIGHT JOIN gouvernances ON gouvernances.id = membre_gouvernance.gouvernance_id AND
                                          gouvernances.v2_enregistree IS NOT NULL

  `.then((rows) => {
    if (rows.length !== 1) {
      throw new Error('Unexpected number of rows for gouvernances counts')
    }
    return rows[0]
  })

export const getHomepageData = async () => {
  const [appData, conseillersNumeriques, aidantsConnect, gouvernances] =
    await Promise.all([
      getAppData(),
      // prismaClient.conseillerNumerique.count({}),
      // on met 4000 en dur en attendant d'avoir la valeur du nombre de poste attribué
      4000,
      prismaClient.structureAidantsConnect.aggregate({
        where: { isActive: true },
        _sum: {
          aidants: true,
        },
      }),
      getGouvernancesCounts(),
    ])

  return {
    dataUpdated: appData.dataUpdated,
    gouvernances,
    conseillersNumeriques,
    aidantsConnect: aidantsConnect._sum.aidants,
  }
}

export type HomepageData = Awaited<ReturnType<typeof getHomepageData>>
