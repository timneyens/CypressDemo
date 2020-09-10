import settings from '../../Settings/Settings';

export default function (success) {
  fetch(`${settings.apiRoot}/todos`)
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
