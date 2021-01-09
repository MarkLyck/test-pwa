describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('localhost:5000')
        cy.contains('reload')
    })
})