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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillInput', (element, textToType) => {
    element.type(textToType)
})

Cypress.Commands.add('clickButton', (buttonElement) => {
    buttonElement.click()
})

Cypress.Commands.add('validateURL', (path) => {
    cy.url().should('contain', path)
})

Cypress.Commands.add('validateMessage', (element,message) => {
    element.should('be.visible').and('contain.text', message)
})

Cypress.Commands.add('clickButtonWithText', (buttonText) => {
    cy.contains('button', buttonText).click()
})