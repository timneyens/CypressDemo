export default function (todos, id, todoItem) {
  const updatedTodos = todos.map((todo) => {
    if (todo.identifier === id) {
      return { ...todo, todoItems: [...todo.todoItems, todoItem] };
    }

    return todo;
  });

  return updatedTodos;
}
