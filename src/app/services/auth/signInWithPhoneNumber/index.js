import firebase from '../../firebase';

export default function signInWithPhoneNumber({ phoneNumber, recaptcha }) {
  return new Promise(async (resolve, reject) => {
    const fb = await firebase();

    fb.auth()
      .signInWithPhoneNumber(phoneNumber, recaptcha)
      .then((confirmationResult) => {
        resolve({ confirmationResult });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
