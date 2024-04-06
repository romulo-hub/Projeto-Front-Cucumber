// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('site', (link, registrar) => {
    cy.visit(link)
    cy.get(registrar).click()
	
	
})


Cypress.Commands.add('login', (masculino, primeironome, segundonome, email) => {
    cy.get(masculino).click()
    cy.get('#FirstName').type(primeironome)
    cy.get('#LastName').type(segundonome)
	cy.get('#Email').type(email)
	
})

Cypress.Commands.add('aniversario', (dia, mes, ano) => {
    cy.get(dia).select('15').contains('15').should('be.visible')
	cy.get(mes).select('3')
	cy.get(mes).select('March').contains('March').should('be.visible')
    cy.get(ano).select('1993').contains('1993').should('be.visible')

})

Cypress.Commands.add('complemento', (empresa) => {
    cy.get('#Company').type(empresa)
 
})

Cypress.Commands.add('pass', (PSW, PSW2) => {
    cy.get('#Password').type(PSW)
    cy.get('#ConfirmPassword').type(PSW2)
    cy.get('#register-button').click()

})

Cypress.Commands.add('validacao', (firstname, last, emailerro) => {
    cy.get(firstname).contains('First name is required.').should('be.visible')
    cy.get(last).contains('Last name is required.').should('be.visible')
    cy.get(emailerro).contains('Email is required.').should('be.visible')

})
















//Cypress.Commands.add('login', (nome, sobrenome) => {
   // cy.get(nome)
    //cy.get(sobrenome).type('Lucas')

//})

//Cypress.Commands.add('aniversario', (dia, mes) => {
    //cy.get(dia).select('15').contains('15').should('be.visible')
	//cy.get(mes).select('3')
	//cy.get(mes).select('March').contains('March').should('be.visible')
    
//})

//Cypress.Commands.add('anoEemail', (email, empresa, ano) => {
    //cy.get(ano).select('1993').contains('1993').should('be.visible')
    //cy.get(email).type('brunolucas@gmail.com')
    //cy.get(empresa).type('Bruno LTDA')
 
//})

//Cypress.Commands.add('PSW', (senha, confirmar) => {
    //cy.get(senha).type('101010')
    //cy.get(confirmar).type('101010')
 
//)









