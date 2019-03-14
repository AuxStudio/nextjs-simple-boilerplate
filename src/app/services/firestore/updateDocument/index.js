import getRef from '../getRef';

export default function updateDocument({ url, document }) {
  return new Promise(async (resolve, reject) => {
    const ref = await getRef(url);

    ref
      .update(document)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
