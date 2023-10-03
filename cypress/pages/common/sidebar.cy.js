class sidebar {

    elements = {
        logoutButton: () => cy.get('#logout_sidebar_link')
    }

}

module.exports = new sidebar()
