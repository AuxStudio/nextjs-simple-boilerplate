import firebase from '../../firebase';

export default function getPhoneAuthCredential({ confirmationResult, code }) {
  const codeString = code.toString();

  return new Promise(async (resolve) => {
    const fb = await firebase();
    const credential = fb.auth.PhoneAuthProvider.credential(
      confirmationResult.verificationId,
      codeString,
    );

    resolve({ credential });
  });
}
