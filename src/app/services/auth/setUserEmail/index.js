import firebase from '../../firebase';

export default function setUserEmail({ email }) {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .currentUser.updateEmail(email)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
}
