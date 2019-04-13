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
        let collection;
        let document;

        if (snapshot.docs) {
          /*
           * It's a collection
           */
          collection = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
        } else {
          /*
           * It's a document
           */
          const data = snapshot.data();

          if (data) {
            /*
             * Only return the document if there is data in it
             */
            document = {
              ...snapshot.data(),
              id: snapshot.id,
            };
          }
        }

        callback({ collection, document });
      },
      (error) => {
        callback({ error });
      },
    );

    resolve(unsubscribe);
  });
};
