import getRef from '../getRef';

// Gets a collection from firestore, queries it (if queries (array) provided) and
// parses the snapshot to return docs data only
export default function getCollection({ url, queries }) {
  return new Promise(async (resolve, reject) => {
    let ref = await getRef(url);

    if (queries) {
      queries.forEach((query) => {
        ref = ref.where(...query);
      });
    }

    ref
      .get()
      .then((collection) => {
        try {
          const collectionArray = collection.docs.map((document) => {
            return {
              ...document.data(),
              id: document.id,
            };
          });

          resolve({ data: collectionArray });
        } catch (error) {
          if (collection.docs && true) {
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
