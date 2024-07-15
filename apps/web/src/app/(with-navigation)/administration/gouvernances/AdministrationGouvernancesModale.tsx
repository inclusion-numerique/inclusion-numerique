'use client'

import { ReactElement, ReactNode } from 'react'

import { useAdministrationGouvernances } from './useAdministrationGouvernances'

type AdministrationGouvernancesModaleProps = Readonly<{
  ancienCommentaireSuivi: string
  ancienProblemeIdentifie: string
  code: string
  idGouvernance: string
  label: ReactNode
  nom: string
}>

const AdministrationGouvernancesModale = ({
  ancienCommentaireSuivi,
  ancienProblemeIdentifie,
  code,
  idGouvernance,
  label,
  nom,
}: AdministrationGouvernancesModaleProps): ReactElement => {
  const {
    commentaireSuivi,
    problemeIdentifie,
    mettreAJourLeCommentaireSuivi,
    mettreAJourLeProblemeIdentifie,
    modifierLesCommentaires,
  } = useAdministrationGouvernances(
    ancienCommentaireSuivi,
    ancienProblemeIdentifie,
  )

  return (
    <>
      <button
        className="fr-btn fr-btn--tertiary-no-outline"
        data-fr-opened="false"
        aria-controls={`fr-modal-${code}`}
        type="button"
      >
        {label}
      </button>
      <dialog
        aria-labelledby={`fr-modal-title-modal-${code}`}
        id={`fr-modal-${code}`}
        className="fr-modal"
      >
        <div className="fr-container fr-container--fluid fr-container-md">
          <div className="fr-grid-row fr-grid-row--center">
            <div className="fr-col-12 fr-col-md-8 fr-col-lg-6">
              <div className="fr-modal__body">
                <div className="fr-modal__header">
                  <button
                    className="fr-btn--close fr-btn"
                    title="Fermer la modale"
                    aria-controls={`fr-modal-${code}`}
                    type="button"
                  >
                    Fermer
                  </button>
                </div>
                <div className="fr-modal__content">
                  <h1
                    id={`fr-modal-title-modal-${code}`}
                    className="fr-modal__title"
                  >{`${code} - ${nom}`}</h1>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="fr-label" htmlFor="problemeIdentifie">
                    Problème identifié
                  </label>
                  <input
                    className="fr-input fr-mb-8v"
                    id="problemeIdentifie"
                    onChange={mettreAJourLeProblemeIdentifie}
                    value={problemeIdentifie}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="fr-label" htmlFor="commentaireSuivi">
                    Rédiger un suivi
                  </label>
                  <textarea
                    className="fr-input"
                    id="commentaireSuivi"
                    onChange={mettreAJourLeCommentaireSuivi}
                    value={commentaireSuivi}
                  />
                  <div className="fr-flex fr-flex-gap-4v fr-justify-content-center fr-mt-8v">
                    <button
                      className="fr-btn fr-btn--secondary"
                      aria-controls={`fr-modal-${code}`}
                      type="button"
                    >
                      Annuler
                    </button>
                    <button
                      className="fr-btn"
                      aria-controls={`fr-modal-${code}`}
                      onClick={modifierLesCommentaires(idGouvernance)}
                      type="button"
                    >
                      Confirmer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default AdministrationGouvernancesModale
