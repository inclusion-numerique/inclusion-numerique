import axios from 'axios'
import { City, IFNResponse } from '@app/web/types/City'

export const getCities = async (): Promise<City[]> => {
  const cities = await axios.get<Omit<City, 'ifn'>[]>(
    'https://geo.api.gouv.fr/departements/08/communes?fields=centre,population,codesPostaux',
  )

  const ifn = await axios.get<IFNResponse>(
    `https://preprod.fragilite-numerique.tlscp.fr/api/scoring/city?${cities.data
      .map((city) => `codes[]=${city.code}`)
      .join(
        '&',
      )}&filters[]=no_thd_coverage_rate&filters[]=no_4g_coverage_rate&filters[]=older_65_rate&filters[]=nscol15p_rate&filters[]=poverty_rate`,
  )

  return cities.data.map((city) => ({
    ...city,
    ifn: ifn.data[city.code].score.total,
  }))
}
