import getRef from '../getRef';

export default function getDocument({ url }) {
  return new Promise(async (resolve, reject) => {
    const ref = await getRef(url);

    ref
      .get()
      .then((document) => {
        try {
          resolve({ data: document.data() });
        } catch (error) {
          if (document.docs && true) {
            reject(new Error('References a document, not a collection'));
          } else {
            reject(error);
          }
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
