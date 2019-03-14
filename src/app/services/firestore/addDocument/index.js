import getRef from '../getRef';

export default function addDocument({ url, document }) {
  return new Promise(async (resolve, reject) => {
    const ref = await getRef(url);

    ref
      .add(document)
      .then((response) => {
        resolve({ id: response.id });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
