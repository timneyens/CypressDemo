import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('System returns error when fetching todos', () => {
  cy.route2({
    path: '/api/todos',
    method: 'GET'
  }, {
    statusCode: 404,
  }).as('todos');
});

When('User opens todo page', () => {
  cy.visit('/');
});

Then('User sees an error', () => {
  cy.findByText('error').should('exist');
});
