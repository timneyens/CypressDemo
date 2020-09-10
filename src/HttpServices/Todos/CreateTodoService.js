export default function (data, success) {
  fetch('api/todos', {
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
      success(responseData);
    });
}
