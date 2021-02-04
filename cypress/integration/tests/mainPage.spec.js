
describe('Marriage planner Main Page cypress test', () =>{
    it('Navigate to MarriagePlanner Main Page ',() => {
        cy.visit('../HtmlPages/MarriagePlanning.html')
    }) 
    it('Press on LogIn button',()=>{
        cy.get('a[href*="LogIn.html"]').click()
    }) 
    it('Login to application',()=>{
        cy.get('input[name=emailAdd]').type('admin@gmail.com')
        cy.get('input[name=password]').type('pass')
        cy.get('#btnLogIn').click()
    }) 
    it('Press on about button',()=>{
        cy.get('a[href*="about"]').click()       
    })
    it('Press on stories button',()=>{
        cy.get('a[href*="stories"]').click()
    })
    it('Press on cotact button',()=>{
        cy.get('a[href*="contact"]').click()
    })
    it('Press on service button',()=>{
        cy.get('a[href*="services"]').click()
        cy.get('a[href*="../HtmlPages/startHere.html"]').click()
    })
    it('Press on survey button',()=>{
        cy.visit('../HtmlPages/MarriagePlanning.html')
        cy.get('a[href*="../HtmlPages/survey.html"]').click()
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})