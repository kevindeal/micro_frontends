describe('Micro Frontend Shell', () => {
  it('should load the Header and Body', () => {
    // Visit your running shell app (on localhost:3000)
    cy.visit('http://localhost:3000');

    // Check if the Header is rendered
    cy.get('header').should('exist');

    // Check if the Body is rendered
    cy.get('body').should('exist');

    // Optionally, test text/content inside the components
    cy.get('header').contains('Header Component Text'); // Adjust according to your content
    cy.get('body').contains('Body Component Text');     // Adjust according to your content
  });
});
