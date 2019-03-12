import getRef from '../getRef';

export default ({ url, query }, callback) => {
  return new Promise(async (resolve) => {
    let ref = await getRef(url);

    if (query) {
      ref = ref.where(...query);
    }

    const unsubscribe = ref.onSnapshot(callback);

    resolve(unsubscribe);
  });
};
