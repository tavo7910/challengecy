import logOutPage from '../../pages/logOutPage.cy.js'
import loginPage from '../../pages/loginPage.cy.js'

describe("Test Cases to verify Logout is working correctly", ()=> {

    beforeEach('Navigate to main page', () => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('TC7. Verify that Standard User is able to logout from application', () => {
        loginPage.fillLogin(Cypress.env('standard_user'))
        logOutPage.logOut()
        cy.validateURL(Cypress.config().baseUrl)
    });

}) 