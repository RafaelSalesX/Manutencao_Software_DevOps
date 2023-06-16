Cypress.Commands.add('NovoRequerimento1', function(){
    cy.get('.btn').click()
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get('.btn').click()
    cy.get('#inputDisciplina').select('ADS030 - Manutenção de Software e DevOps')
    cy.get('#inputProva').select('A1')
    cy.get('#inputArgumentacao').type('Necessito de permissão para realizar a A1 da matéria selecionada. ')
    cy.get('.btn-danger').click()

})

Cypress.Commands.add('NovoRequerimento2', function(){
    cy.get('.btn').click()
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get('.btn').click()
    cy.get('#inputDisciplina').select('ADS032 - Construção de Frontend')
    cy.get('#inputProva').select('A2')
    cy.get('#inputArgumentacao').type('Necessito de permissão para realizar a A2 da matéria selecionada. ')
    cy.get('.btn-danger').click()

})