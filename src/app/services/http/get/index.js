export default function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => {
        const response = data && { data };

        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
