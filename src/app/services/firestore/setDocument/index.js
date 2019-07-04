import getRef from '../getRef';

export default ({ url, document }) => {
  return new Promise(async (resolve, reject) => {
    const ref = await getRef(url);

    ref
      .set(document, { merge: true })
      .then((response) => {
        // No response when document already exists
        const id = response && response.id;

        resolve(id);
      })
      .catch((error) => {
        reject(new Error(error));
      });
  });
};
