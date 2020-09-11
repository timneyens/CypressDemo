describe('Todos API', () => {
  it('GET returns todo list items', () => {
    cy.request('/api/todos')
    .its('body')
    .should('have.length', 2)
  });

  it('POST creates a todo item and returns created item', () => {
    cy.request('POST', '/api/todos', {title: "Friday"}).as('create');
    cy.get('@create').should((response) => {
      expect(response.body.title).to.equal('Friday');
    });
  });
});