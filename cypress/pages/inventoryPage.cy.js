import navbar from '../pages/common/navbar.cy'

class inventoryItemPage {

    elements = {
        itemBackpack: () => cy.get('#item_4_title_link'),
        checkoutBtn: () => cy.get('#checkout'),
        addCartText: "Add to cart",
        removeCartText: "Remove",
        navbar: navbar
    }

    addToCart = () => {
        cy.clickButton(this.elements.itemBackpack())
        cy.clickButtonWithText(this.elements.addCartText)
        cy.clickButton(navbar.elements.shoppingCartButton())
        cy.clickButton(this.elements.checkoutBtn())
    }

    addRemoveItemFromCart = () =>{
        cy.clickButton(this.elements.itemBackpack())
        cy.clickButtonWithText(this.elements.addCartText)
        navbar.elements.shoppingCartBadge().should('be.visible')
        cy.clickButtonWithText(this.elements.removeCartText) 
        navbar.elements.shoppingCartBadge().should('not.exist')
        cy.go('back')
    }
}

module.exports = new inventoryItemPage()