import getRef from '../getRef';

export default ({ url, queries }, callback) => {
  return new Promise(async (resolve) => {
    let ref = await getRef(url);

    if (queries) {
      queries.forEach((query) => {
        ref = ref.where(...query);
      });
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let data = {};

        if (snapshot.docs) {
          /*
           * It's a collection
           */
          data = snapshot.docs.map((document) => {
            return {
              ...document.data(),
              id: document.id,
            };
          });
        } else {
          /*
           * It's a document
           */
          const document = snapshot.data();

          if (document) {
            /*
             * Only return the document if there is data in it
             */
            data = {
              ...snapshot.data(),
              id: snapshot.id,
            };
          }
        }

        callback({ data });
      },
      (error) => {
        callback({ error });
      },
    );

    resolve(unsubscribe);
  });
};
