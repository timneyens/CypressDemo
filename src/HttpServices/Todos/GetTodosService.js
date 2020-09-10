export default function (success, errorCallback) {
  fetch('api/todos')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }

      return Promise.reject();
    })
    .then((responseData) => {
      success(responseData);
    })
    .catch(error => {
      errorCallback();
    });
}
