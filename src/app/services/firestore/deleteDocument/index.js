import getRef from '../getRef';

export default function deleteDocument({ url }) {
  return new Promise(async (resolve, reject) => {
    const ref = await getRef(url);

    ref
      .delete()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
