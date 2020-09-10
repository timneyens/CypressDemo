describe('Todos e2e', () => {
  it('can add todo list', () => {
    cy.viewport(1400, 600);
    cy.visit('/');
    cy.findByText('Add todo list').click();

    // cy.get('#todo-name').type('Thursday');
    // cy.findByLabelText('Todo name').type('Thursday');
    // cy.findByPlaceholderText('Todo name').type('Thursday');
    cy.findByTestId('test-todo-name').type('Thursday');

    cy.findByText('Save').click();

    cy.findByText('Thursday').should('exist');
  });
});
