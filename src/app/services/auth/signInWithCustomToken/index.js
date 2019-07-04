import firebase from '../../firebase';

/*
 * NOTE: Accepts object with data key because we will need to request a custom token first
 * and that's what a post will return
 */
export default function signInWithCustomToken({ data }) {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .signInWithCustomToken(data)
      .then(({ user }) => {
        resolve({ user });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
