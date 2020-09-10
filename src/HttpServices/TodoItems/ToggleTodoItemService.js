import settings from '../../Settings/Settings';

export default function (todoId, todoItemId, success) {
  fetch(`${settings.apiRoot}/todos/${todoId}/items/${todoItemId}/toggle`, {
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
