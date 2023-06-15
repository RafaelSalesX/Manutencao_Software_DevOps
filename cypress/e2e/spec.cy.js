describe('Atividade Cypress Novo Requerimento', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000/login')
    cy.get('#inputMatricula').type('2023100')
    cy.get('#inputSenha').type('senha123')
  });

  it('Testando Novo Requerimento', () => {
    cy.NovoRequerimento1()
    cy.get(':nth-child(6) > :nth-child(3) > .badge').should('be.visible')
   
  })

  it('Testando Segundo Requerimento', function() {
    cy.NovoRequerimento2()
    cy.get(':nth-child(6) > :nth-child(3) > .badge').should('be.visible')
  });
})