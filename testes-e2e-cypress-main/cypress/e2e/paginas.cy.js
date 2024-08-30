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
        cy.location('pathname').should('eq','/home')
        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
        cy.location('pathname').should('eq','/home/cartoes')
    })


    it('Deve conseguir acessar a página de serviços', () => {
        cy.location('pathname').should('eq','/home')
        cy.getByData('app-home').find('a').eq(2).click()
        cy.getByData('servicos').should('exist').and('have.descendants', 'h5', 'img')
        cy.location('pathname').should('eq','/home/servicos')
    })


    it('Deve conseguir acessar a página de investimentos', () => {
        cy.location('pathname').should('eq','/home')
        cy.getByData('app-home').find('a').eq(3).click()
        cy.getByData('title').should('exist').and('have.text', 'Investimentos')
        cy.location('pathname').should('eq','/home/investimentos')
    })
})
