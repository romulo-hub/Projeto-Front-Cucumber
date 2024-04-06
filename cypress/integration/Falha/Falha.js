/// <reference types="cypress" />


let data 

before(() => {

cy.fixture('example').then((tData) =>{
 data = tData
 
});

});


Given(/^que eu acesso a tela de registro$/, () => {
	cy.viewport('macbook-15')
	cy.site('https://demo.nopcommerce.com', '.ico-register')
});


When(/^eu preencher os campos de senhas e clicar em registrar$/, () => {
	cy.pass(data.PSW, data.PSW2)
});

Then(/^devera aparecer as mensagens de erro nos campos obrigatorios$/, () => {
	cy.validacao('#FirstName-error','#LastName-error','#Email-error')
});

