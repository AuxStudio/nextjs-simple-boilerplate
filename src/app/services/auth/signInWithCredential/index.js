import firebase from '../../firebase';

export default function signInWithCredential({ credential }) {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .signInAndRetrieveDataWithCredential(credential)
      .then(({ user }) => {
        resolve({ user });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
