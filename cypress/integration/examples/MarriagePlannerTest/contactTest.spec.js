
describe('ContactTest in main page', () =>{
    it('Login to application',()=>{
        cy.visit('../HtmlPages/LogIn.html')
        cy.get('input[name=emailAdd]').type('admin@gmail.com')
        cy.get('input[name=password]').type('pass')
        cy.get('#btnLogIn').click()
    })
    it('Navigate to Contact Form in Main Page ',() => {
        cy.get('a[href*="contact"]').click()
    })  
    it('Validate Contact Form',()=>{
        cy.get('input[name=name]').type('Hajar')
        cy.get('input[name=email]').type('hajar.amara.9@gmail.com')
        cy.get('textarea[name=comments]').type('Validate Form is working correctly!')
        cy.get('#sendBtn').click()
    })   
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})