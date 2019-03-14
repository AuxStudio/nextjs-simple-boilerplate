import firebase from '../../firebase';

export default function enableNetwork() {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.firestore()
      .enableNetwork()
      .then(() => resolve())
      .catch((error) => {
        reject(error);
      });
  });
}
