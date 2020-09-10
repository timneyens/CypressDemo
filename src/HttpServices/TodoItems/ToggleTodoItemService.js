export default function (todoId, todoItemId, success) {
  fetch(`api/todos/${todoId}/items/${todoItemId}/toggle`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => {
      if (response.status === 200) {
        success(todoId, todoItemId);
      }
    });
}
