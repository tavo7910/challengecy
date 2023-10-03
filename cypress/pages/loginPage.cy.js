import navbar from '../pages/common/navbar.cy'

class loginPage {
    elements = {
        userNameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        navbar: navbar,
    }

    fillLogin = (username) => {
        cy.fillInput(this.elements.userNameInput(),Cypress.env(username))
        cy.fillInput(this.elements.passwordInput(),Cypress.env('password'))
        cy.clickButton(this.elements.loginButton())
    }

    measurePerformance = () => {
        const expectedTime = performance.now()
        cy.get(navbar.elements.hamburguerMenu());
        cy.wrap(performance.now()).then(loadTime => {
            cy.log('Page load took ${loadTime - expectedTime} milliseconds.');
            cy.log ('The expected time should be 0.10000000894069672 milliseconds')
        })
    }
}

module.exports = new loginPage()
