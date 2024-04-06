
/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

let data

before(() => {

	cy.fixture('example').then((tData) => {
		data = tData

	});

});

Given(/^que eu acesso a tela de registro$/, () => {
	cy.viewport('macbook-15')
	cy.site('https://demo.nopcommerce.com', '.ico-register')
});

When(/^eu preencher os campos nome e sobre nome$/, () => {
	cy.login('#gender-male', faker.name.fullName(), faker.name.fullName(), faker.internet.email())
});


When(/^validar que a data selecionada corresponde com o input desejado$/, () => {
	cy.aniversario('[name="DateOfBirthDay"]', '[name="DateOfBirthMonth"]', '[name="DateOfBirthYear"]')
});


When(/^informar o nome da empresa$/, () => {
	cy.complemento(faker.company.name())

});

When(/^preencher a senha depois clicar em Registro$/, () => {
	cy.pass(data.PSW, data.PSW2)
});

Then(/^devera aparecer uma mensagem com a informacao = seu cadastro foi conluido$/, () => {
	cy.get('.result').contains('Your registration completed').should('be.visible')
});
