import React from 'react';
import renderer from 'react-test-renderer';
import NewTodo from './NewTodo';

describe('NewTodo', () => {
  it('gets loaded correctly', () => {
    const component = renderer.create(
      <NewTodo addCreatedTodo={jest.fn} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handle change should update the state', () => {
    const component = renderer.create(
      <NewTodo addCreatedTodo={jest.fn} />,
    ).getInstance();

    expect(component.state.title).toBe('');
    component.handleChange({ target: { value: 'test' } });
    expect(component.state.title).toBe('test');
  });

  it('addTodo can be called', () => {
    const component = renderer.create(
      <NewTodo addCreatedTodo={jest.fn} />,
    ).getInstance();

    component.addTodo();
  });
});
