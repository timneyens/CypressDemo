import React from 'react';
import renderer from 'react-test-renderer';
import Todo from './Todo';

describe('Todo', () => {
  it('gets loaded correctly', () => {
    const todoItems = [{
      identifier: 'identifier1',
      text: 'text1',
    },
    {
      identifier: 'identifier2',
      text: 'text2',
    }];

    const component = renderer.create(
      <Todo identifier="identifier" title="title" todoItems={todoItems} addCreatedTodoItem={jest.fn} toggleTodoItem={jest.fn} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
