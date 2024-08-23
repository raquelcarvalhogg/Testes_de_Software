describe('Testando múltiplas páginas', () => {
    it('Deve conseguir acessar a página de cartões', () => {
        cy.visit('/')
    })
})


describe('Testando múltiplas páginas', () => {
    beforeEach('Login no site', () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
    })


    it('Deve conseguir acessar a página de cartões', () => {
        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
    })


    it('Deve conseguir acessar a página de serviços', () => {
        cy.getByData('app-home').find('a').eq(2).click()
        cy.getByData('servicos').should('exist').and('have.descendants', 'h5', 'img')
    })


    it('Deve conseguir acessar a página de investimentos', () => {
        cy.getByData('app-home').find('a').eq(3).click()
        cy.getByData('title').should('exist').and('have.text', 'Investimentos')
    })
})
