import firebase from '../../firebase';

export default function getEmailAuthCredential({ email, password }) {
  return new Promise(async (resolve) => {
    const fb = await firebase();
    const credential = fb.auth.EmailAuthProvider.credential(email, password);

    resolve({ credential });
  });
}
