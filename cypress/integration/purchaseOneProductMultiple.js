describe('Find and purchase one item', () => {

    before(() => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[placeholder="Username"]').type('standard_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()

        cy.contains('Products').should('be.visible')
        
      })


    beforeEach(() => {
        Cypress.Cookies.preserveOnce('__cypress.initial', 'session-username')
        
      })

    it('add an item to cart', () => {
        cy.contains('Sauce Labs Fleece Jacket').parent().get('#add-to-cart-sauce-labs-fleece-jacket').click()

        cy.wait(2000);
        cy.get('#shopping_cart_container').click()

        cy.get('#shopping_cart_container').click()

        cy.contains('Your Cart').should('be.visible')
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible')
    })

    it('open cart and proceed to checout', () => {
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

    })

    // it('complete checkout flow', () => {
        
    // })

    // it('log out', () => {


    //     cy.get('#login_credentials').should(be.visible);
        
    // })









    // it('displays two todo items by default', () => {
    //     cy.visit('http://automationpractice.com/index.php')

    //     cy.get('.todo-list li').should('have.length', 2)
  
      
    //   cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    //   cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    // })
})