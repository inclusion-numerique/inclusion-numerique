export const dynamic = 'force-dynamic'
export const revalidate = 0

const ConfidentialityPage = () => (
  <div className="fr-container fr-my-8w">
    <div className="fr-grid-row fr-grid-row--center">
      <div className="fr-col-md-8">
        <h1>Politique de confidentialité - Espace France Numérique Ensemble</h1>
        <p>Dernière mise à jour le 19/12/2024</p>
        <h2>Qui sommes-nous ?</h2>
        <p>
          Espace France Numérique Ensemble est un service public numérique
          développé au sein de l’Incubateur des territoires de l’Agence
          Nationale de la Cohésion des Territoires (ANCT). Il s’agit d’une
          plateforme qui permet le pilotage de la politique d’inclusion
          numérique par la donnée.
        </p>
        <p>
          Le responsable de traitement est l’ANCT, représentée par Monsieur
          Stanislas Bourron, Directeur général.
        </p>
        <h2>Pourquoi traitons-nous des données à caractère personnel ?</h2>
        <p>
          Espace France Numérique Ensemble traite des données à caractère
          personnel pour outiller l’ensemble des gestionnaires de la politique
          d’inclusion numérique en fournissant des espaces de connexion aux
          préfectures, aux collectivités territoriales et des formulaires pour
          participer à l’élaboration des feuilles de route d’inclusion
          numérique.
        </p>
        <h2>
          Quelles sont les données à caractère personnel que nous traitons ?
        </h2>
        <ul>
          <li>
            <b>Données relatives aux utilisateurs via ProConnect</b> : nom,
            prénom, adresse e-mail, numéro de téléphone ;
          </li>
          <li>
            <b>Données relatives à la lettre d’information</b> : nom, prénom,
            adresse e-mail.
          </li>
        </ul>
        <h2>
          Qu’est-ce qui nous autorise à traiter des données à caractère
          personnel ?
        </h2>
        <p>
          Le traitement est nécessaire à l’exécution d’une mission d’intérêt
          public ou relevant de l’exercice de l’autorité publique dont est
          investie l’ANCT en tant que responsable de traitement, au sens de
          l’article 6-1 e) du RGPD.
        </p>
        <p>
          Cette mission d’intérêt public se traduit en pratique notamment par
          l’article L. 1231-2 du code général des collectivités territoriales
          (CGCT).
        </p>
        <h2>Pendant combien de temps conservons-nous vos données ?</h2>
        <div className="fr-table" data-fr-js-table="true">
          <table className="data-table" data-fr-js-table-element="true">
            <thead>
              <tr>
                <th scope="col">Catégories de données</th>
                <th scope="col">Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Données relatives aux utilisateurs</td>
                <td>Données relatives à la lettre d’information</td>
              </tr>
              <tr>
                <td>1 an à partir du dernier contact avec l’agent public</td>
                <td>Jusqu’à la désinscription</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Quels sont vos droits ?</h2>
        <p>Vous disposez :</p>
        <ul>
          <li>D’un droit d’information et d’accès à vos données ;</li>
          <li>D’un droit de rectification ;</li>
          <li>D’un droit d’opposition ;</li>
          <li>D’un droit à la limitation du traitement de vos données.</li>
        </ul>
        <p>
          Pour exercer vos droits, vous pouvez nous contacter à :{' '}
          <a href="mailto:societe.numerique@anct.gouv.fr">
            societe.numerique@anct.gouv.fr
          </a>
        </p>
        <p>
          Ou contacter la déléguée à la protection des données à :{' '}
          <a href="mailto:dpo@anct.gouv.fr">dpo@anct.gouv.fr</a>
        </p>
        <p>
          Puisque ce sont des droits personnels, nous ne traiterons votre
          demande que si nous sommes en mesure de vous identifier. Dans le cas
          contraire, nous pouvons être amenés à vous demander une preuve de
          votre identité.
        </p>
        <p>
          Nous nous engageons à répondre à votre demande dans un délai
          raisonnable qui ne saurait excéder 1 mois à compter de la réception de
          votre demande. Si vous estimez que vos droits n’ont pas été respectés
          après nous avoir contactés, vous pouvez adresser une réclamation à la
          CNIL.
        </p>
        <h2>Qui peut avoir accès à vos données ?</h2>
        <p>
          Les personnes suivantes ont accès à vos données en tant que
          destinataires :
        </p>
        <ul>
          <li>
            Les membres habilités de l’équipe Espace France Numérique Ensemble
            (administrateurs, développeurs notamment) ont accès à vos données,
            dans le cadre de leurs missions ;
          </li>
          <li>Les préfectures.</li>
        </ul>
        <h2>Qui nous aide à traiter vos données ?</h2>
        <p>
          Certaines données sont communiquées à des « sous-traitants » qui
          agissent pour le compte de l’ANCT, selon ses instructions.
        </p>
        <div className="fr-table" data-fr-js-table="true">
          <table className="data-table" data-fr-js-table-element="true">
            <thead>
              <tr>
                <th scope="col">Sous-traitant</th>
                <th scope="col">Traitement réalisé</th>
                <th scope="col">Pays destinataire</th>
                <th scope="col">Garanties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Scalingo</td>
                <td>Hébergement</td>
                <td>France</td>
                <td>
                  <a
                    href="https://scalingo.com/fr/contrat-gestion-traitements-donnees-personnelles"
                    target="_blank"
                    rel="external noopener noreferrer"
                  >
                    https://scalingo.com/fr/contrat-gestion-traitements-donnees-personnelles
                  </a>
                </td>
              </tr>
              <tr>
                <td>Brevo</td>
                <td>Gestion de la lettre d’information</td>
                <td>France</td>
                <td>
                  <a
                    href="https://www.brevo.com/fr/legal/termsofuse/#accord-sur-le-traitement-des-donnees-a-caractere-personnel-dpa"
                    target="_blank"
                    rel="external noopener noreferrer"
                  >
                    https://www.brevo.com/fr/legal/termsofuse/#accord-sur-le-traitement-des-donnees-a-caractere-personnel-dpa
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Cookies et traceurs</h2>
        <p>
          Un cookie est un fichier déposé sur votre terminal lors de la visite
          d’un site. Il a pour but de collecter des informations relatives à
          votre navigation et de vous adresser des services adaptés à votre
          terminal (ordinateur, mobile ou tablette).
        </p>
        <p>
          En application de l’article 5-3 de la directive ePrivacy, transposée à
          l’article 82 de la loi n° 78-17 du 6 janvier 1978 relative à
          l’informatique, aux fichiers et aux libertés, les cookies et traceurs
          suivent deux régimes distincts.
        </p>
        <p>
          D’une part, les cookies strictement nécessaires au service ou ayant
          pour finalité exclusive de faciliter la communication par voie
          électronique, sont dispensés de consentement préalable.
        </p>
        <p>
          D’autre part, les cookies n’étant pas strictement nécessaires au
          service ou n’ayant pas pour finalité exclusive de faciliter la
          communication par voie électronique, doivent être consenti par
          l’utilisateur.
        </p>
        <p>
          Ce consentement de la personne concernée constitue une base légale au
          sens du RGPD, à savoir l’article 6-1 a). Espace France Numérique
          Ensemble ne dépose aucun cookie tiers sur sa plateforme et ne
          nécessite aucun consentement.
        </p>
        <p>
          <b>Pour en savoir plus sur les cookies :</b>
        </p>
        <ul>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/que-dit-la-loi"
              target="_blank"
              rel="external noopener noreferrer"
            >
              Cookies et traceurs : que dit la loi ?
            </a>
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/comment-se-proteger/maitriser-votre-navigateur"
              target="_blank"
              rel="external noopener noreferrer"
            >
              Cookies les outils pour les maîtriser
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
export default ConfidentialityPage
