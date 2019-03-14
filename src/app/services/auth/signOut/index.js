import firebase from '../../firebase';

export default () => {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .signOut()
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};
