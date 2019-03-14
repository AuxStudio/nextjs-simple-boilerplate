// FIXME: headers only if supplied
export default function post({ url, parameters }) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(parameters),
    })
      .then((data) => {
        const response = data && { data };

        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
