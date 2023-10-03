class errorMessages {

    elements = {
        errorContainer: () => cy.get('.error-message-container')
    }

}

module.exports = new errorMessages()
