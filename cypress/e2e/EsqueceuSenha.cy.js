describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://account.blip.ai/Login')
  })
  it ('Clicar na opção Esqueci a senha', () => {
    cy.get('#email').type('cianelessa@gmail.com')
    cy.get('#login-forgot-password').click();
  })
})