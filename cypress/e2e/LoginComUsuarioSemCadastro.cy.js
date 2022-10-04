describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://account.blip.ai/Login')
  })
  it ('Realizar login com usuário sem cadastro no base de dados', () => {
    cy.get('#email').type('cianelessa@gmail.com')
    cy.get('#password').type('123456')
    cy.get('#blip-login').click();
  })
})