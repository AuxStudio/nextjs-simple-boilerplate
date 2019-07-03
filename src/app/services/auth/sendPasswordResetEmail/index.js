import firebase from '../../firebase';

export default function signInAnonymously({ email }) {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
