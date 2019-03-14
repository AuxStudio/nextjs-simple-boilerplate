import firebase from '../../firebase';

export default function signInAnonymously() {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .signInAnonymously()
      .then((data) => {
        const response = data && {
          user: {
            uid: data.user.uid,
            isAnonymous: data.user.isAnonymous,
          },
        };

        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
