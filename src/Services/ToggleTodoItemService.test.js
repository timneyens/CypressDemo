import ToggleTodoItem from './ToggleTodoItemService';

describe('ToggleTodoItemService', () => {
  it('add should update todo item', () => {
    const todos = [
      {
        identifier: '8cb927cb-55d9-43ec-b420-bb02d8a23cfb',
        title: 'Test Title',
        todoItems: [
          {
            identifier: '3ceaec69-cdd4-4a24-9c2d-b1629a1a8701',
            text: 'item 1',
            checked: true,
          },
          {
            identifier: 'c6026f66-0ee1-4845-b415-49ead0c920e5',
            text: 'item 1',
            checked: true,
          },
        ],
      },
      {
        identifier: 'cb31f373-51e7-44c6-ab5d-58d7261269f8',
        title: 'test',
        todoItems: [
          {
            identifier: 'cec35e58-f7e8-48fe-8ccc-32a10ec782c8',
            text: 'test',
            checked: false,
          },
          {
            identifier: 'c0863745-4d3d-4f43-b603-cb9c6c2c8026',
            text: 'test',
            checked: false,
          },
        ],
      },
    ];

    let updatedTodos = ToggleTodoItem(todos, 'cb31f373-51e7-44c6-ab5d-58d7261269f8', 'cec35e58-f7e8-48fe-8ccc-32a10ec782c8');
    expect(updatedTodos[1].todoItems[0].identifier).toEqual('cec35e58-f7e8-48fe-8ccc-32a10ec782c8');
    expect(updatedTodos[1].todoItems[0].checked).toEqual(true);
    updatedTodos = ToggleTodoItem(updatedTodos, 'cb31f373-51e7-44c6-ab5d-58d7261269f8', 'cec35e58-f7e8-48fe-8ccc-32a10ec782c8');
    expect(updatedTodos[1].todoItems[0].identifier).toEqual('cec35e58-f7e8-48fe-8ccc-32a10ec782c8');
    expect(updatedTodos[1].todoItems[0].checked).toEqual(false);
  });
});
