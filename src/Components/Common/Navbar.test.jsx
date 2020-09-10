import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('gets loaded correctly', () => {
    const component = renderer.create(
      <Navbar showNewTodo={jest.fn} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
