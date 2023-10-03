class checkoutPage {

    elements = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        zipCodeInput: () => cy.get('#postal-code'),
        continueBtn: () => cy.get('#continue'),
        itemDescription: () => cy.get('#item_4_title_link'),
        finishBtn: () => cy.get('#finish'),
        completeMessage: () => cy.get('.complete-header')
    }

    checkoutItem = (firstName, lastName, zipCode) => {
        cy.fillInput(this.elements.firstNameInput(), firstName)
        cy.fillInput(this.elements.lastNameInput(), lastName)
        cy.fillInput(this.elements.zipCodeInput(), zipCode)    
        cy.clickButton(this.elements.continueBtn())
    }

    validatePurchase = (descriptionMessage, completedCheckout) => {
        cy.validateMessage(this.elements.itemDescription(), descriptionMessage)
        cy.clickButton(this.elements.finishBtn())
        cy.validateMessage(this.elements.completeMessage(), completedCheckout)
    }

}

module.exports = new checkoutPage()