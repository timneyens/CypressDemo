describe('Todos component', () => {
  beforeEach(() => {
    cy.viewport(1400, 600);
    cy.route2({
      path: '/api/todos',
      method: 'GET'
    }, { fixture: 'todos.json' }).as('todos');
    cy.route2(
      {
        path: '/api/todos',
        method: 'POST',
      }, {
      body:
      {
        "identifier": "bb8a009b-b2cb-46b5-b652-0e0121c38b75",
        "title": "Thursday",
        "createdDate": "2020-09-10T13:10:34.6071907Z",
        "todoItems": [],
      }
    }).as('add-todos');

    cy.visit('/');
    cy.wait('@todos');
  });

  it('View todo list', () => {
    cy.findByText('Add todo list').click();

    cy.findByLabelText('Todo name').type('Thursday');

    cy.findByText('Save').click();

    cy.wait('@add-todos');
    cy.findByText('Thursday').should('exist');
  });
});
