import firebase from '../../firebase';

export default function signInAnonymously() {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .signInAnonymously()
      .then((data) => {
        resolve({ user: data.user });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
