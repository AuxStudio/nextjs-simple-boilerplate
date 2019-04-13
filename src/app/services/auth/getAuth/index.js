import firebase from '../../firebase';

export default function getAuth(args, callback) {
  return new Promise(async (resolve) => {
    const fb = await firebase();

    const unsubscribe = fb.auth().onAuthStateChanged((user) => {
      /*
       * If there is no user signed in
       * Return the user as an empty object
       */
      callback({ user: user || {} });
    });

    resolve(unsubscribe);
  });
}
