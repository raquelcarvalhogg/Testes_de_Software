describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira.Crie sua conta com a gente!')
  })

  it('Deve renderizar h2 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('vantagnes') .contains('Vantagens do nosso banco')
  })
})

it('Deve renderizar h3 com o texto correto!', () => {
  cy.visit('http://localhost:3000')
  cy.getByData('conta e cartao') .contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
})

it('Deve renderizar h3 com o texto correto!', () => {
  cy.visit('http://localhost:3000')
  cy.getByData('saques sem custo') .contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco24h.')
})

it('Deve renderizar h3 com o texto correto!', () => {
  cy.visit('http://localhost:3000')
  cy.getByData('estilos vantagens') .contains(' Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
})

it('Deve renderizar h3 com o texto correto!', () => {
  cy.visit('http://localhost:3000')
  cy.getByData('seguro dispositivos') .contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
})