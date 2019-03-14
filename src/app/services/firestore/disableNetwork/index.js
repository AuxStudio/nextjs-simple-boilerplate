import firebase from '../../firebase';

export default function disableNetwork() {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.firestore()
      .disableNetwork()
      .then(() => resolve())
      .catch((error) => {
        reject(error);
      });
  });
}
