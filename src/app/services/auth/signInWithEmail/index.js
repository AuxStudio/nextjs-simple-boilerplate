import firebase from '../../firebase';

export default ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};
