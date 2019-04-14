import firebase from '../../firebase';

export default function linkWithCredential({ credential }) {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .currentUser.linkWithCredential(credential)
      .then(({ user }) => {
        resolve({ user });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
