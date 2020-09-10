import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  it('gets loaded correctly', () => {
    const component = renderer.create(
      <TodoItem todoId="todoId" identifier="identifier" text="text" toggleTodoItem={jest.fn} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggle can be called', () => {
    const component = renderer.create(
      <TodoItem todoId="todoId" identifier="identifier" text="text" toggleTodoItem={jest.fn} />,
    ).getInstance();

    component.toggle();
  });
});
