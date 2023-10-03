import sidebar from '../pages/common/sidebar.cy'
import navbar from '../pages/common/navbar.cy'
class logOutPage {

    elements = {
        sidebar: sidebar,
        navbar: navbar
    }

    logOut = () => {
        cy.clickButton(navbar.elements.hamburguerMenu())
        cy.clickButton(sidebar.elements.logoutButton())
    }

}

module.exports = new logOutPage()