import classNames from 'classnames'
import React, { Fragment } from 'react'
import NavigationSideMenu from '@app/ui/components/NavigationSideMenu'
import Notice from '@codegouvfr/react-dsfr/Notice'
import Button from '@codegouvfr/react-dsfr/Button'
import { sPluriel } from '@app/ui/utils/pluriel/sPluriel'
import type {
  BesoinsIngenierieFinanciereForForm,
  GouvernanceForForm,
  GouvernanceWithDemandesSubventionsForForm,
} from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/getGouvernanceForForm'
import {
  gouvernanceFormSections,
  gouvernanceFormSectionSideMenuItems,
  publicViewGouvernanceSideMenuItems,
} from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceFormSections'
import BesoinCardContent from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/[gouvernanceId]/besoins-ingenierie-financiere/priorisation/BesoinCardContent'
import { getPriorisationCardInfos } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/[gouvernanceId]/besoins-ingenierie-financiere/priorisation/getPriorisationCardInfos'
import { getBesoinsEnIngenieriePriorisationDefaultValues } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/besoinsEnIngenieriePriorisationDefaultValues'
import { limiteModificationDesGouvernances } from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/gouvernanceMetadata'
import {
  imprimerGouvernancePath,
  modifierGouvernancePath,
} from '@app/web/app/(with-navigation)/gouvernances/gouvernancePaths'
import type { GouvernanceScope } from '@app/web/gouvernance/GouvernanceScope'
import PrintButton from '@app/web/app/(print)/PrintButton'
import WhiteCard from '@app/web/ui/WhiteCard'
import { dateAsDay } from '@app/web/utils/dateAsDay'
import { nameOrEmail } from '@app/web/utils/nameOrEmail'
import InfoLabelValue from '@app/web/components/Gouvernance/InfoLabelValue'
import GouvernancePressentieDetails from '@app/web/app/(with-navigation)/gouvernances/GouvernancePressentieDetails'
import {
  getActorFromCode,
  membreToFormMembre,
} from '@app/web/gouvernance/GouvernanceActor'
import {
  frequenceComiteMasculin,
  perimetreFeuilleDeRouteLabels,
  typeComite,
  typeContratLabels,
} from '@app/web/gouvernance/gouvernanceWordingsAndOptions'
import NoGouvernancePublicView from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/NoGouvernancePublicView'
import { getDemandesDeSubventionsForGouvernance } from '@app/web/gouvernance/gouvernanceStatus'
import DemandeDeSubventionDetailsCard from '@app/web/app/(with-navigation)/gouvernances/departements/[codeDepartement]/gouvernance/DemandeDeSubventionDetailsCard'
import { getStatutDemandesSubvention } from '@app/web/gouvernance/statutDemandesSubvention'
import { isDefinedAndNotNull } from '@app/web/utils/isDefinedAndNotNull'
import { getDownloadUrl } from '@app/web/utils/getDownloadUrl'
import styles from './GouvernanceDetails.module.css'

const GouvernanceDetails = ({
  publicView,
  gouvernance,
  besoins,
  demandeDeSubvention,
  scope,
  print,
}: {
  // publicView -> Censor sensitive information
  publicView: boolean
  gouvernance: GouvernanceForForm
  demandeDeSubvention: GouvernanceWithDemandesSubventionsForForm
  besoins: BesoinsIngenierieFinanciereForForm | null
  scope: GouvernanceScope
  print?: boolean
}) => {
  const {
    id,
    createur,
    creation,
    modification,
    derniereModificationPar,
    organisationsRecruteusesCoordinateurs,
    noteDeContexte,
    membres,
    comites,
    feuillesDeRoute,
    v2Enregistree,
    sousPrefetReferentPrenom,
    sousPrefetReferentEmail,
    sousPrefetReferentNom,
    departement,
  } = gouvernance

  const { noteDeContexteSubventionsEnregistree, noteDeContexteSubventions } =
    demandeDeSubvention

  // Public can only see accepted demandes de subvention
  const demandesDeSubvention = getDemandesDeSubventionsForGouvernance(
    demandeDeSubvention,
  ).filter((demande) => (publicView ? demande.acceptee : true))

  if (!v2Enregistree) {
    // Un visiteur public ne peux pas voir les gouvernances en cours d'élaboration
    return publicView ? (
      <>
        <div className="fr-container fr-container--narrow fr-pt-15v">
          <h1 className="fr-h3">Gouvernance · {departement.nom}</h1>
        </div>
        <NoGouvernancePublicView />
      </>
    ) : (
      <div className="fr-container fr-container--medium fr-py-10v fr-mb-30v ">
        <GouvernancePressentieDetails gouvernance={gouvernance} />
      </div>
    )
  }

  const besoinCardInfos = besoins
    ? getPriorisationCardInfos({
        defaultValue: getBesoinsEnIngenieriePriorisationDefaultValues({
          ...gouvernance,
          besoinsEnIngenierieFinanciere: besoins,
        }),
        besoinsEnIngenierieFinanciere: besoins,
      })
    : []

  const hasDemandesDeSubventions =
    !!noteDeContexteSubventions &&
    !!noteDeContexteSubventionsEnregistree &&
    demandesDeSubvention.length > 0

  const demandesSubventionsCompleted =
    getStatutDemandesSubvention(demandeDeSubvention) === 'Finalisé'

  const sideMenuItems = [
    ...(publicView
      ? publicViewGouvernanceSideMenuItems
      : gouvernanceFormSectionSideMenuItems),
    besoinCardInfos.length > 0
      ? {
          text: 'Besoins en ingénierie financière',
          linkProps: { href: '#besoins-ingenierie-financiere' },
        }
      : undefined,
    {
      text: 'Actions & subventions',
      linkProps: { href: '#subventions' },
    },
  ].filter(isDefinedAndNotNull)

  const creationMeta = creation
    ? `${dateAsDay(creation)} par ${nameOrEmail(createur)}`
    : null

  const modificationMeta = gouvernance
    ? `${dateAsDay(modification)} par ${nameOrEmail(derniereModificationPar)}`
    : null

  const displayModificationMeta = modificationMeta !== creationMeta

  const formMembres = membres.map(membreToFormMembre)
  const collectiviteMembres = formMembres.filter(
    ({ code }) => getActorFromCode(code).type !== 'structure',
  )
  const structureMembres = formMembres.filter(
    ({ code }) => getActorFromCode(code).type === 'structure',
  )
  const coporteursMembres = formMembres.filter(({ coporteur }) => coporteur)

  return (
    <div
      className={classNames(
        'fr-container fr-pb-10v fr-mb-20v',
        print && 'fr-container--narrow',
        print && styles.print,
      )}
    >
      <div className="fr-grid-row">
        {/* Same offset that main part */}
        {!print && (
          <div className="fr-col-12 fr-col-md-4 fr-col-lg-3 fr-mb-8v" />
        )}
        <div
          className={classNames(
            print
              ? 'fr-col-12'
              : 'fr-col-12 fr-col-md-8 fr-col-lg-7 fr-col-xl-6',
          )}
        >
          <div className="fr-hidden-print fr-width-full fr-flex fr-justify-content-space-between fr-align-items-center">
            {print && <PrintButton />}
          </div>
          <h1
            className={classNames(
              'fr-h3 fr-mt-15v',
              publicView ? 'fr-mb-8v' : 'fr-mb-2v',
            )}
          >
            Gouvernance · {departement.nom}
          </h1>
          {!publicView && (
            <p
              className={classNames(
                print ? 'fr-mb-6v' : 'fr-mb-0',
                'fr-text--sm fr-text-mention--grey',
              )}
            >
              Déposée le {creationMeta}
              {displayModificationMeta && ` · Modifiée le ${modificationMeta}`}
            </p>
          )}
          {!publicView && !print && (
            <Notice
              className="fr-mt-6v fr-mb-12v"
              title={
                <span className="fr-flex fr-width-full fr-align-items-center fr-justify-content-space-between">
                  <span>
                    Proposition modifiable jusqu’au{' '}
                    <strong>
                      {dateAsDay(limiteModificationDesGouvernances)}
                    </strong>
                  </span>
                  {!!scope.codeDepartement && (
                    <Button
                      size="small"
                      priority="tertiary no outline"
                      iconId="fr-icon-edit-line"
                      className="fr-color-inherit"
                      linkProps={{
                        href: modifierGouvernancePath(scope, id),
                      }}
                    >
                      Modifier
                    </Button>
                  )}
                </span>
              }
            />
          )}
          {!publicView && !print && (
            <Button
              className="fr-mb-6v"
              iconId="fr-icon-download-line"
              priority="tertiary"
              linkProps={{
                href: imprimerGouvernancePath(scope, id),
              }}
            >
              Imprimer ou télécharger
            </Button>
          )}
        </div>
      </div>
      <div className="fr-grid-row">
        {!print && (
          <div className="fr-col-12 fr-col-md-4 fr-col-lg-3 fr-mb-8v">
            <NavigationSideMenu
              className={styles.sideMenu}
              items={sideMenuItems}
              burgerMenuButtonText="Sections"
              contentId="gouvernance-form"
              sticky
            />
          </div>
        )}
        <div
          className={classNames(
            print
              ? 'fr-col-12'
              : 'fr-col-12 fr-col-md-8 fr-col-lg-7 fr-col-xl-6',
          )}
          style={{
            // Use negative margin top to align side menu but keep margin top for scroll
            marginTop: -24,
          }}
        >
          {/* Wrapper div for anchor navigation with padding */}
          {/* Les coordonnées du préfet ne sont pas visibles par le public */}
          {!publicView && (
            <div
              id={gouvernanceFormSections.contactDuSousPrefetReferent.id}
              className="fr-pt-6v"
            >
              <WhiteCard className={styles.box}>
                <h5>
                  {gouvernanceFormSections.contactDuSousPrefetReferent.title}
                </h5>
                <hr className="fr-separator-8v" />
                <p
                  className={classNames(
                    print ? 'fr-mb-0' : 'fr-mb-2v',
                    'fr-text--medium',
                  )}
                >
                  {sousPrefetReferentPrenom} {sousPrefetReferentNom}
                  <br />
                  {sousPrefetReferentEmail}
                </p>
              </WhiteCard>
            </div>
          )}
          <div
            id={gouvernanceFormSections.coporteursDeLaGouvernance.id}
            className="fr-pt-6v"
          >
            <WhiteCard className={styles.box}>
              <h5>{gouvernanceFormSections.coporteursDeLaGouvernance.title}</h5>
              {coporteursMembres.length === 0 && (
                <>
                  <hr className="fr-separator-8v" />
                  <p>
                    Pas de collectivité co-porteuse identifiée, la préfecture
                    sera l’unique porteuse de la gouvernance
                  </p>
                </>
              )}
              {coporteursMembres.map(({ nom, code }, index) => (
                <Fragment key={code}>
                  <hr className="fr-separator-8v" />
                  <InfoLabelValue
                    label={`Co-porteur ${index + 1}`}
                    value={nom}
                    labelClassName={print ? 'fr-mt-2v' : ''}
                  />
                </Fragment>
              ))}
            </WhiteCard>
          </div>
          <div
            id={gouvernanceFormSections.membresDeLaGouvernance.id}
            className="fr-pt-6v"
          >
            <WhiteCard className={styles.box}>
              <h5>{gouvernanceFormSections.membresDeLaGouvernance.title}</h5>
              {collectiviteMembres.length > 0 && (
                <>
                  <hr className="fr-separator-8v" />
                  <p
                    className={classNames(
                      print ? 'fr-my-2v' : 'fr-my-0',
                      'fr-text--xl fr-text--bold',
                    )}
                  >
                    Collectivité{sPluriel(collectiviteMembres.length)}&nbsp;:{' '}
                    {collectiviteMembres.length}
                  </p>
                  {collectiviteMembres.map(({ nom, code }) => (
                    <p
                      className={classNames(
                        print ? 'fr-mt-05v' : 'fr-mt-4v',
                        ' fr-mb-0',
                      )}
                      key={code}
                    >
                      {nom}
                    </p>
                  ))}
                </>
              )}
              {structureMembres.length > 0 && (
                <>
                  <hr className="fr-separator-8v" />
                  <p
                    className={classNames(
                      print ? 'fr-my-2v' : 'fr-my-0',
                      'fr-text--xl fr-text--bold',
                    )}
                  >
                    Structure{sPluriel(structureMembres.length)}&nbsp;:{' '}
                    {structureMembres.length}
                  </p>
                  {structureMembres.map(({ nom, code }) => (
                    <p
                      className={classNames(
                        print ? 'fr-mt-05v' : 'fr-mt-4v',
                        ' fr-mb-0',
                      )}
                      key={code}
                    >
                      {nom}
                    </p>
                  ))}
                </>
              )}
            </WhiteCard>
          </div>
          <div id={gouvernanceFormSections.comitologie.id} className="fr-pt-6v">
            <WhiteCard className={styles.box}>
              <h5>{gouvernanceFormSections.comitologie.title}</h5>
              {comites.map(
                (
                  {
                    id: comiteId,
                    type,
                    frequence,
                    commentaire,
                    typeAutrePrecisions,
                  },
                  index,
                ) => (
                  <Fragment key={comiteId}>
                    <hr className="fr-separator-8v" />
                    <InfoLabelValue
                      label={`Comite ${index + 1}`}
                      labelClassName={print ? 'fr-mt-2v' : ''}
                      value={
                        <>
                          {type === 'Autre'
                            ? typeAutrePrecisions || 'Autre'
                            : typeComite[type]}{' '}
                          - {frequenceComiteMasculin[frequence]}
                          {commentaire ? (
                            <>
                              <br />
                              {commentaire}
                            </>
                          ) : null}
                        </>
                      }
                    />
                  </Fragment>
                ),
              )}
            </WhiteCard>
          </div>
          <div
            id={gouvernanceFormSections.feuillesDeRouteEtPorteurs.id}
            className="fr-pt-6v"
          >
            <WhiteCard className={styles.box}>
              <h5>{gouvernanceFormSections.feuillesDeRouteEtPorteurs.title}</h5>
              {feuillesDeRoute.map(
                (
                  {
                    nom,
                    membres: membresFeuilleDeRoute,
                    id: feuilleDeRouteId,
                    contratPreexistant,
                    typeContrat,
                    typeContratAutreDescription,
                    perimetreDepartement,
                    perimetreEpcis,
                    perimetreRegion,
                    relationPieceJointe,
                  },
                  index,
                ) => {
                  const membrePorteur = membresFeuilleDeRoute.find(
                    ({ role }) => role === 'Porteur',
                  )?.membre
                  const porteurNom = membrePorteur
                    ? membreToFormMembre(membrePorteur).nom
                    : 'Portée par la préfecture'
                  const perimetreScope = perimetreRegion
                    ? 'region'
                    : perimetreDepartement
                      ? 'departement'
                      : 'epci'
                  const perimetreTitle =
                    perimetreFeuilleDeRouteLabels[perimetreScope]

                  const perimetreEpciInfo =
                    perimetreScope === 'epci' ? (
                      <>
                        {perimetreEpcis.map(({ epci }) => (
                          <span key={epci.code}>
                            <br /> - {epci.nom}
                          </span>
                        ))}
                      </>
                    ) : null

                  return (
                    <Fragment key={feuilleDeRouteId}>
                      <hr className="fr-separator-8v" />
                      <InfoLabelValue
                        label={`Feuille de route ${index + 1} : ${nom}`}
                        labelClassName={print ? 'fr-mt-2v' : ''}
                        value={
                          <>
                            Porteur&nbsp;: {porteurNom}
                            <br />
                            Périmètre géographique&nbsp;: {perimetreTitle}
                            {perimetreEpciInfo}
                            {contratPreexistant && typeContrat ? (
                              <>
                                <br />
                                Contrat préexistant&nbsp;:{' '}
                                {typeContrat === 'Autre'
                                  ? typeContratAutreDescription
                                  : typeContratLabels[typeContrat]}
                              </>
                            ) : null}
                            {publicView ? null : relationPieceJointe ===
                              null ? (
                              <>
                                <br />
                                <Notice
                                  className="fr-mt-5v"
                                  title="Document en cours d’élaboration"
                                />
                              </>
                            ) : (
                              <div className="fr-btns-group fr-mt-8v fr-mb-0 fr-btns-group--icon-left">
                                <Button
                                  linkProps={{
                                    href: getDownloadUrl(
                                      relationPieceJointe.key,
                                    ),
                                  }}
                                  iconId="fr-icon-file-download-line"
                                  iconPosition="left"
                                  className="fr-btn--secondary fr-my-0"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="fr-btn--sm"
                                  />
                                  Télécharger la feuille de route
                                </Button>
                              </div>
                            )}
                          </>
                        }
                      />
                    </Fragment>
                  )
                },
              )}
            </WhiteCard>
          </div>
          <div
            id={
              gouvernanceFormSections
                .coordinateurConseillerNumeriqueDeLaGouvernance.id
            }
            className="fr-pt-6v"
          >
            <WhiteCard className={styles.box}>
              <h5>Coordinateur Conseiller Numérique</h5>
              {organisationsRecruteusesCoordinateurs.length === 0 && (
                <>
                  <hr className="fr-separator-8v" />
                  Aucun
                </>
              )}
              {organisationsRecruteusesCoordinateurs.map(
                ({ siretInformations: { nom, siret } }, index) => (
                  <Fragment key={siret}>
                    <hr className="fr-separator-8v" />
                    <div className="fr-flex fr-justify-content-space-between fr-align-items-center">
                      <span>
                        <InfoLabelValue
                          labelClassName={print ? 'fr-mt-2v' : ''}
                          label={`Collectivité/structure recruteuse ${
                            index + 1
                          }`}
                          value={nom || siret}
                        />
                      </span>
                    </div>
                  </Fragment>
                ),
              )}
            </WhiteCard>
          </div>
          {!publicView && (
            <div
              id={gouvernanceFormSections.noteDeContexte.id}
              className="fr-pt-6v"
            >
              <WhiteCard className={styles.box}>
                <h5>{gouvernanceFormSections.noteDeContexte.title}</h5>
                <hr className="fr-separator-8v" />
                <div
                  dangerouslySetInnerHTML={{
                    __html: noteDeContexte,
                  }}
                  className={classNames(
                    'fr-mb-0',
                    styles.noteDeContexteContainer,
                  )}
                />
              </WhiteCard>
            </div>
          )}

          {besoinCardInfos.length > 0 && (
            <div id="besoins-ingenierie-financiere" className="fr-pt-6v">
              <WhiteCard className={styles.box}>
                <h5>Besoins en ingénierie financière</h5>
                <hr className="fr-separator-8v" />
                {besoinCardInfos.map((card, index) => (
                  <Fragment key={card.prioriteKey}>
                    <hr className="fr-separator-8v" />
                    <div className={classNames(styles.card)}>
                      <BesoinCardContent
                        print={print}
                        index={index}
                        card={card}
                      />
                    </div>
                  </Fragment>
                ))}
              </WhiteCard>
            </div>
          )}

          <div id="subventions" className="fr-pt-6v">
            <WhiteCard className={styles.box}>
              <h5>Actions & subventions</h5>
              {demandesSubventionsCompleted ? null : (
                <Notice
                  className="fr-mb-8v"
                  title="Subventions en cours d’élaboration"
                />
              )}
              {!hasDemandesDeSubventions && (
                <>
                  <hr className="fr-separator-8v" />
                  Subventions en cours d’instruction
                </>
              )}
              {hasDemandesDeSubventions && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: noteDeContexteSubventions,
                  }}
                  className={classNames(
                    'fr-mb-4v',
                    styles.noteDeContexteContainer,
                  )}
                />
              )}
              {demandesDeSubvention.map((demande) => (
                <Fragment key={demande.id}>
                  <hr className="fr-separator-8v" />
                  <div className={classNames(styles.card)}>
                    <DemandeDeSubventionDetailsCard
                      demandeDeSubvention={demande}
                      publicView={publicView}
                    />
                  </div>
                </Fragment>
              ))}
            </WhiteCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GouvernanceDetails
