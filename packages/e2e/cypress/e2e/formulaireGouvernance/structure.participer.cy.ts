import { appUrl } from '../../support/helpers'
import { createAndSigninUserForFormulaireGouvernance } from './createAndSigninUserForFormulaireGouvernance'

describe('ETQ Structure connectée, je peux compléter mon formulaire de  participation à une feuille de route', () => {
  it('Acceptation 1 - Participer sans contact technique, avec SIRET', () => {
    createAndSigninUserForFormulaireGouvernance('structure')
    cy.visit(
      '/formulaires-feuilles-de-routes-territoriales/structure/participer',
    )
    cy.contains('Formulaire personne morale publique ou privée')

    cy.findByLabelText('Nom structure *').type('Technologie 2000')
    cy.findByLabelText('SIRET structure *').type('13002603200081')
    cy.findByLabelText('Département *').select('69')

    cy.findByLabelText('Nom *').type(`Nasr`)
    cy.findByLabelText('Prénom *').type(`Eddin`)
    cy.findByLabelText('Fonction *').type(`Maire`)
    cy.findByLabelText('Adresse e-mail *').type(`nasreddin@test.com`)

    cy.intercept('/api/trpc/*').as('mutation')
    cy.contains('Confirmer et envoyer').click()
    cy.wait('@mutation')

    cy.url().should(
      'equal',
      appUrl(
        '/formulaires-feuilles-de-routes-territoriales/structure/confirmation-formulaire-envoye',
      ),
    )
    cy.contains('Votre réponse a bien été envoyée')
  })

  it('Acceptation 2 - Participer sans contact technique, sans SIRET', () => {
    createAndSigninUserForFormulaireGouvernance('structure')
    cy.visit(
      '/formulaires-feuilles-de-routes-territoriales/structure/participer',
    )
    cy.contains('Formulaire personne morale publique ou privée')

    cy.findByLabelText('Nom structure *').type('Technologie 2000')
    cy.findByLabelText('SIRET structure *').type('Je sais plus')
    cy.get('label').contains('Je n’ai pas de SIRET').click()
    cy.findByLabelText('Département *').select('69')

    cy.findByLabelText('Nom *').type(`Nasr`)
    cy.findByLabelText('Prénom *').type(`Eddin`)
    cy.findByLabelText('Fonction *').type(`Maire`)
    cy.findByLabelText('Adresse e-mail *').type(`nasreddin@test.com`)

    cy.intercept('/api/trpc/*').as('mutation')
    cy.contains('Confirmer et envoyer').click()
    cy.wait('@mutation')

    cy.url().should(
      'equal',
      appUrl(
        '/formulaires-feuilles-de-routes-territoriales/structure/confirmation-formulaire-envoye',
      ),
    )
    cy.contains('Votre réponse a bien été envoyée')

    cy.intercept('/api/trpc/*').as('restart-mutation')

    cy.testId('recommencer-un-formulaire-button').click()
    cy.wait('@mutation')

    cy.appUrlShouldBe(
      '/formulaires-feuilles-de-routes-territoriales/structure/participer',
    )
    cy.contains('Formulaire personne morale publique ou privée')
  })
})
