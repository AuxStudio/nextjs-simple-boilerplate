import firebase from '../../firebase';

export default function getAuth() {
  return new Promise(async (resolve) => {
    const fb = await firebase();

    fb.auth().onAuthStateChanged((user) => {
      const response = user && {
        user: {
          uid: user.uid,
          isAnonymous: user.isAnonymous,
        },
      };

      resolve(response);
    });
  });
}
