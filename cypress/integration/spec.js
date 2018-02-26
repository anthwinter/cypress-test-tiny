describe('Button', () => {
  it('should be visible', () => {
    cy.viewport(640, 480)
    cy.visit('/')
    cy.get('#buttonElement').should('be.visible')
  })
})
