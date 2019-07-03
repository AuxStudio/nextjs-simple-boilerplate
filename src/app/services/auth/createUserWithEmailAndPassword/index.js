import firebase from '../../firebase';

export default ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    try {
      fb.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
