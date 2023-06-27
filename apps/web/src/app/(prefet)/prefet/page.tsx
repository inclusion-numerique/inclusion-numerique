import { redirect } from 'next/navigation'
import { getSessionUser } from '@app/web/auth/getSessionUser'

export const generateMetadata = async () => {
  const user = await getSessionUser()
  if (!user) {
    redirect(`/connexion?suivant=/prefet`)
    return
  }

  if (user.role === 'Prefect' && user.roleScope) {
    // TODO : check if user is allowed to access this page and redirect to own departement
    redirect(`/prefet/${user.roleScope}`)
    return
  }

  redirect('/profil')
}

const Page = () => null

export default Page
