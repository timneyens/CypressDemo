import React from 'react';
import renderer from 'react-test-renderer';
import NewTodoItem from './NewTodoItem';

describe('NewTodoItem', () => {
  it('gets loaded correctly', () => {
    const component = renderer.create(
      <NewTodoItem identifier="identifier" addCreatedTodoItem={jest.fn} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handle change should update the state', () => {
    const component = renderer.create(
      <NewTodoItem identifier="identifier" addCreatedTodoItem={jest.fn} />,
    ).getInstance();

    expect(component.state.text).toBe('');
    component.handleChange({ target: { value: 'test' } });
    expect(component.state.text).toBe('test');
  });

  it('addTodoItem should update the state', () => {
    const component = renderer.create(
      <NewTodoItem identifier="identifier" addCreatedTodoItem={jest.fn} />,
    ).getInstance();

    component.setState({ text: 'test' });
    expect(component.state.text).toBe('test');
    component.addTodoItem();
    expect(component.state.text).toBe('');
  });
});
