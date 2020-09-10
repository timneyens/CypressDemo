export default function (todos, todoId, todoItemId) {
  const updatedTodos = todos.map((todo) => {
    if (todo.identifier === todoId) {
      const updatedTodo = { ...todo };

      updatedTodo.todoItems = updatedTodo.todoItems.map((todoItem) => {
        if (todoItem.identifier === todoItemId) {
          return { ...todoItem, checked: !todoItem.checked };
        }

        return todoItem;
      });
      return updatedTodo;
    }

    return todo;
  });

  return updatedTodos;
}
