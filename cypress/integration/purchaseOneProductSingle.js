describe('Find and purchase one item', () => {


    it('log in', () => {
        cy.visit('https://www.saucedemo.com/')

        //Log in portion
        cy.get('[placeholder="Username"]').type('standard_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()

        cy.contains('Products').should('be.visible')

        //Add to cart portion
        cy.contains('Sauce Labs Fleece Jacket').parent().get('#add-to-cart-sauce-labs-fleece-jacket').click()
        cy.get('#shopping_cart_container').click()

        cy.contains('Your Cart').should('be.visible')
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible')

        //Checkout portion
        cy.get('#checkout').click()
        cy.contains('Checkout: Your Information').should('be.visible')

        cy.get('#first-name').type('Vlad')
        cy.get('#last-name').type('Longo')
        cy.get('#postal-code').type('L3Z 2X9')
        cy.get('#continue').click()

        cy.contains('Checkout: Overview').should('be.visible')
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible')

        cy.get('#finish').click()
        cy.contains('Checkout: Complete!').should('be.visible')
        
        cy.get('#back-to-products').click()
        cy.contains('Products').should('be.visible')

        //Logout portion
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

        cy.get('#login_credentials').should('be.visible');
    })
})