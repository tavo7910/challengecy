class navbar {

    elements = {
        shoppingCartButton: () => cy.get('.shopping_cart_link'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
        hamburguerMenu: () => cy.get('#react-burger-menu-btn')
    }

}

module.exports = new navbar()
