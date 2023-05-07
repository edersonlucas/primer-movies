describe('404 Page Navigation', () => {

  it('should receive a 404 code when accessing a non-existent page', () => {
    cy.request({url: '/ronaldo', failOnStatusCode: false}).its('status').should('equal', 404)

  });

  it('should be a text informing that the user accessed a page that does not exist', () => {
    cy.visit('/ronaldo', {failOnStatusCode: false});
    cy.contains('h2', 'A página que você está procurando não existe.')
    cy.contains('p', 'Você pode ter digitado incorretamente o endereço ou a página pode ter sido movida.')
  });

  it('should be a button to add "/movies/1" when accessing an invalid url', () => {
    cy.intercept('GET', `${Cypress.env('api_server')}/?page=1&limit=18`, { fixture: 'moviesPage1.json' })
    cy.intercept('GET', `${Cypress.env('api_server')}/?page=1&limit=3`, { fixture: 'moviesHighlights.json' })
    cy.visit('/ronaldo', {failOnStatusCode: false});
    cy.contains('a', 'VÁ PARA A PÁGINA DE FILMES').click()
    cy.url().should('include', '/movies/1');
  });
})