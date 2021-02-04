
describe('Marriage planner logIn cypress test', () =>{
    it('Navigate to MarriagePlanner logIn ',() => {
        cy.visit('../HtmlPages/LogIn.html')
    })
    it('Login to application',()=>{
        cy.get('input[name=emailAdd]').type('admin@gmail.com')
        cy.get('input[name=password]').type('pass')
        cy.get('#btnLogIn').click()
    })   
})




Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})