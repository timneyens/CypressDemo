export default function (id, data, success) {
  fetch(`api/todos/${id}/items`, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }

      return Promise.reject();
    })
    .then((responseData) => {
      success(id, responseData);
    });
}
