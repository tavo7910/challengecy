import loginPage from '../../pages/loginPage.cy.js'
import inventoryPage from '../../pages/inventoryPage.cy.js'
import checkoutPage from '../../pages/checkoutPage.cy.js'

describe("Test Case to verify that purchase is working correctly", ()=> {

    beforeEach('Navigate to main page', () => {
        cy.visit(Cypress.config().baseUrl)
        cy.fixture('urlPaths').as('path');
        cy.fixture('mockForm').as('mockClient');
        cy.fixture('orderInfo').as('order');
    })

    it('TC5. Verify that Standard User is able to purchase a product', () => {
        loginPage.fillLogin(Cypress.env('standard_user'))

        cy.get('@path').then((path) => {
            cy.validateURL(path.inventoryPath)
        });

        inventoryPage.addToCart()

        cy.get('@mockClient').then((mockClient) => {
            checkoutPage.checkoutItem(mockClient.firstName, mockClient.lastName, mockClient.zipCode)
        });

        cy.get('@order').then((order) => {
            checkoutPage.validatePurchase(order.itemDescription, order.completedOrderMessage)
        });

    });

    it('TC6. Verify that Standard User is able to user add remove action', () => {
        loginPage.fillLogin(Cypress.env('standard_user'))

        cy.get('@path').then((path) => {
            cy.validateURL(path.inventoryPath)
        });

        inventoryPage.addRemoveItemFromCart()

    });
    
}) 