import settings from '../../Settings/Settings';

export default function (data, success) {
  fetch(`${settings.apiRoot}/todos`, {
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
