import { createOdtFile } from '@app/web/server/odt/createOdtFile'
import {
  MembreBeneficiaireDataForConvention,
  postProcessMembreBeneficiaireDataForConvention,
} from '@app/web/gouvernance/getMembreBeneficiaireDataForConvention'
import imageA from '@app/web/server/odt/convention202406/Pictures/10000201000005DC000001D853CD6968'
import imageB from '@app/web/server/odt/convention202406/Pictures/10000000000003200000012EED57178D'
import imageC from '@app/web/server/odt/convention202406/Pictures/100000000000043800000167D46606F0'
import imageD from '@app/web/server/odt/convention202406/Pictures/100000000000044A0000015D34F20EE6'

import { convention202407Content } from '../server/odt/convention202406/convention202407Content'
import { convention202407Styles } from '../server/odt/convention202406/convention202407Styles'
import { convention202407Manifest } from '../server/odt/convention202406/convention202407Manifest'
import { getDemandesSubventionsForForm } from '../app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/getGouvernanceForForm'

export const generateConventionSubvention = async (
  data: MembreBeneficiaireDataForConvention,
) => {
  const demandesDeSubvention2 = data.membre.beneficiaireSubventions[0]
    ? await getDemandesSubventionsForForm({
        gouvernanceId:
          data.membre.beneficiaireSubventions[0].demandeDeSubvention
            .feuilleDeRoute.gouvernanceId,
      })
    : null

  return createOdtFile({
    content: convention202407Content(
      postProcessMembreBeneficiaireDataForConvention(
        data,
        demandesDeSubvention2,
      ),
    ),
    styles: convention202407Styles,
    manifest: convention202407Manifest,
    pictures: [
      // $> base64 image.png
      {
        name: '10000000000003200000012EC614AD7C4E7E902B.png',
        data: Buffer.from(imageB, 'base64'),
      },
      {
        name: '100000000000043800000167EB22AE4E5A3C39E2.png',
        data: Buffer.from(imageC, 'base64'),
      },
      {
        name: '100000000000044A0000015D79251F1FA5C2ABC4.png',
        data: Buffer.from(imageD, 'base64'),
      },
      {
        name: '10000001000005DC000001D840A5A38F9EC128D2.png',
        data: Buffer.from(imageA, 'base64'),
      },
    ],
  })
}
