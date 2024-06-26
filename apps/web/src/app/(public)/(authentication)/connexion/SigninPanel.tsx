import { Route } from 'next'
import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup'
import { AuthCard } from '@app/web/app/(public)/(authentication)/AuthCard'
import { signinErrorMessage } from '@app/web/app/(public)/(authentication)/authenticationErrorMessage'
import { EmailSigninForm } from '@app/web/app/(public)/(authentication)/connexion/EmailSigninForm'
import { PublicWebAppConfig } from '@app/web/PublicWebAppConfig'
import MonCompteProSigninButton from '@app/web/app/(public)/(authentication)/connexion/MonCompteProSigninButton'

const SigninPanel = ({
  error,
  callbackUrl,
}: {
  error?: string
  callbackUrl: Route
}) => (
  <AuthCard>
    <h4>Connexion à {PublicWebAppConfig.projectTitle}</h4>
    {error ? (
      <div className="fr-alert fr-alert--error fr-alert--sm fr-mb-6v">
        <p>{signinErrorMessage(error)}</p>
      </div>
    ) : null}
    <h5>Se connecter avec MonComptePro</h5>
    <div className="fr-connect-group">
      <MonCompteProSigninButton callbackUrl={callbackUrl} />
    </div>
    <p className="fr-hr-or fr-mt-6v">ou</p>
    <h5>Se connecter avec son email</h5>
    <EmailSigninForm callbackUrl={callbackUrl} />
    <hr className="fr-mt-6v" />
    <h5 className="fr-mt-4v">Vous n’avez pas de compte ?</h5>
    <ButtonsGroup
      buttons={[
        {
          children: 'Créer un compte',
          linkProps: {
            href:
              callbackUrl === '/'
                ? '/creer-un-compte'
                : `/creer-un-compte?suivant=${callbackUrl}`,
          },
          priority: 'secondary',
        },
      ]}
    />
  </AuthCard>
)

export default SigninPanel
