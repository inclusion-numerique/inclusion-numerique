import axios from 'axios'
import { City, EPCI, IFNResponse } from '@app/web/types/City'
import { DepartmentGeoJSON, getDepartmentGeoJSON } from './geom'

const getSections = async (
  departement: string,
): Promise<{
  cities: City[]
  epcis: EPCI[]
}> => {
  const cities = await axios.get<Omit<City, 'ifn'>[]>(
    `https://geo.api.gouv.fr/departements/${departement}/communes?fields=centre,population,codesPostaux,codeEpci`,
  )

  const epcis = cities.data
    .map((city) => city.codeEpci)
    .filter((epci, index, array) => array.indexOf(epci) === index)

  const [ifnCities, ifnEPCIs] = await Promise.all([
    axios.get<IFNResponse>(
      `https://preprod.fragilite-numerique.tlscp.fr/api/scoring/city?${cities.data
        .map((city) => `codes[]=${city.code}`)
        .join(
          '&',
        )}&filters[]=no_thd_coverage_rate&filters[]=no_4g_coverage_rate&filters[]=older_65_rate&filters[]=nscol15p_rate&filters[]=poverty_rate`,
    ),
    axios.get<IFNResponse>(
      `https://preprod.fragilite-numerique.tlscp.fr/api/scoring/epci?${epcis
        .map((epci) => `codes[]=${epci}`)
        .join(
          '&',
        )}&filters[]=no_thd_coverage_rate&filters[]=no_4g_coverage_rate&filters[]=older_65_rate&filters[]=nscol15p_rate&filters[]=poverty_rate`,
    ),
  ])

  return {
    cities: cities.data.map((city) => ({
      ...city,
      ifn: ifnCities.data[city.code].score.total,
    })),
    epcis: epcis.map((epci) => ({
      code: epci,
      ifn: ifnEPCIs.data[epci].score.total,
    })),
  }
}

export const getDepartmentInformations = async (
  departement: string,
): Promise<{
  cities: City[]
  epcis: EPCI[]
  geoJSON: DepartmentGeoJSON
} | null> => {
  const geoJSON = getDepartmentGeoJSON(departement)
  const sections = await getSections(departement)
  return geoJSON
    ? {
        ...sections,
        geoJSON,
      }
    : null
}
