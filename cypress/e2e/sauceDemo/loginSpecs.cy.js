import loginPage from '../../pages/loginPage.cy'
import checkoutPage from '../../pages/checkoutPage.cy'
import inventoryPage from "../../pages/inventoryPage.cy"
import errorMessages from "../../pages/common/errorMessages.cy"

describe(" ***Test Cases to verify Login is working correctly*** ", ()=> {

    beforeEach('Navigate to main page', () => {
        cy.visit(Cypress.config().baseUrl)
        cy.fixture('errorMessages').as('message');
        cy.fixture('urlPaths').as('path');
        cy.fixture('mockForm').as('mockClient');

    })

    it('TC1. Verify that user is able to login in Swag Labs with Standard User \n', () => {
        loginPage.fillLogin(Cypress.env('standard_user'))

        cy.get('@path').then((path) => {
            cy.validateURL(path.inventoryPath)
        });

    });

    it('TC2. Verify that user is NOT able to login in Swag Labs with Locked User\n', () => {
       loginPage.fillLogin(Cypress.env('locked_out_user'))

        cy.get('@message').then((message) => {
            cy.validateMessage(errorMessages.elements.errorContainer(), message.loginErrorMessage)
        });

    });

    it('TC3. Verify that Problem User is NOT able to purchase \n', () => {

        loginPage.fillLogin(Cypress.env('problem_user'))
        cy.get('@path').then((path) => {
            cy.validateURL(path.inventoryPath)
        });

        inventoryPage.addToCart()

        cy.get('@mockClient').then((mockClient) => {
            checkoutPage.checkoutItem(mockClient.firstName, mockClient.lastName, mockClient.zipCode)
        });

        cy.get('@message').then((message) => {
            cy.validateMessage(errorMessages.elements.errorContainer(), message.checkoutFormErrorMessage)
        });
    });

    it('TC4. Verify that Performance Glitch User is able to login with a timelapse', () => {
        loginPage.fillLogin(Cypress.env('performance_glitch_user'))
        loginPage.measurePerformance()

        cy.get('@path').then((path) => {
            cy.validateURL(path.inventoryPath)
        });
    });

}) 