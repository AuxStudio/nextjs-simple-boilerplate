import firebase from '../../firebase';

export default function getPhoneAuthCredential({ confirmationResult, code }) {
  return new Promise(async (resolve) => {
    const fb = await firebase();
    const credential = fb.auth.PhoneAuthProvider.credential(
      confirmationResult.verificationId,
      code,
    );

    resolve({ credential });
  });
}
