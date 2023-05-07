describe('Movie Page Navigation', () => {

  beforeEach(() => {
    cy.intercept('GET', `${Cypress.env('api_server')}/?page=1&limit=3`, { fixture: 'moviesHighlights.json' })
    cy.intercept('GET', `${Cypress.env('api_server')}/?page=1&limit=18`, { fixture: 'moviesPage1.json' })
    cy.intercept('GET', `${Cypress.env('api_server')}/?page=2&limit=18`, { fixture: 'moviesPage2.json' })
  })

  it('should redirect the user to "/movies/1" when accessing "/"', () => {
    cy.visit('/');
    cy.url().should('include', '/movies/1');
  });

  it('should redirect the user to "/movies/1" when accessing "/movies"', () => {
    cy.visit('/movies');
    cy.url().should('include', '/movies/1');
  });

  it('should redirect the user to "/móveis/1" when accessing "/movies/{Negative number or zero}"', () => {
    cy.visit('/movies/0');
    cy.url().should('include', '/movies/1');
  });

  it('should redirect user to "/movies/1" when accessing "/movies/{word}"', () => {
    cy.visit('/movies/example');
    cy.url().should('include', '/movies/1');
  });

  it('should redirect user to "/movies/{maxPage}" when accessing "/movies/{range greater than maxPage}"', () => {
    cy.intercept('GET', `${Cypress.env('api_server')}/?page=3&limit=18`, { fixture: 'moviesPage1.json' })
    cy.visit('/movies/3');
    cy.url().should('include', '/movies/2');
  });

  it('should show a carousel skeleton before loading the image carousel', () => {
    cy.visit('/movies/1');
    cy.get('[data-testid="skeleton-carousel"]').should('exist');
  })

  it('should show a movie-card skeleton before loading the movie-card', () => {
    cy.visit('/movies/1');
    cy.get('[data-testid="skeleton-movie-card"]').should('exist');
  })

  it('should show a movie titled "Forrest Gump"', () => {
    cy.visit('/movies/1');
    cy.contains('h2', 'Forrest Gump')
  })

  it('should be possible to navigate through the movie carousel by clicking on the next and previous button', () => {
    cy.visit('/movies/1');
    cy.get('div.swiper-button-prev').should('have.class', 'swiper-button-disabled')
    cy.get('div.swiper-button-next').click()
    cy.get('div.swiper-button-prev').should('not.have.class', 'swiper-button-disabled')
    cy.contains('h3', 'The Godfather').should('be.visible');
    cy.get('div.swiper-button-prev').click()
    cy.contains('h3', 'The Shawshank Redemption').should('be.visible');
    cy.get('div.swiper-button-prev').should('have.class', 'swiper-button-disabled')
  })

  it('should be possible to navigate between pages by clicking on the next page and previous page button',async () => {
    cy.visit('/movies/1');
    cy.get('button.pagination-button-selected').should('have.text', '1')
    cy.get('button[aria-label="Botão para pagina anterior"]').should('be.disabled')
    cy.get('button[aria-label="Botão para a pagina seguinte"]').click()
    cy.url().should('include', '/movies/2');
    cy.get('button[aria-label="Botão para pagina anterior"]').should('not.be.disabled')
    cy.get('button.pagination-button-selected').should('have.text', '2')
    cy.get('button[aria-label="Botão para pagina anterior"]').click()
    cy.url().should('include', '/movies/1');
    await cy.get('button.pagination-button-selected').should('have.text', '1')
    cy.get('button[aria-label="Botão para pagina anterior"]').should('be.disabled')
  })

  it('should change movies when switching pages', () => {
    cy.visit('/movies/1');
    cy.get('button[aria-label="Botão para a pagina seguinte"]').click()
    cy.contains('h2', 'The Lion King')
  })

  it('should be 4 paging buttons including next and previous', () => {
    cy.visit('/movies/1');
    cy.get('nav[aria-label="Paginação"]').find('button').should('have.length', 4)
  })

});
