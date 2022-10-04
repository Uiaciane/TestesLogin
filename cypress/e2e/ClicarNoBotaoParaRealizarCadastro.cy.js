describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://account.blip.ai/Login')
  })
  it ('Clicar na opção Realizar cadastro grátis', () => {
    cy.get('#blip-register').click();
  })
})