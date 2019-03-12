import { firebase as firebaseConfig } from '../config';

export default async () => {
  const firebase = await import('firebase/app');
  await import('firebase/auth');
  await import('firebase/firestore');
  await import('firebase/storage');

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(error.message)) {
      console.error('Firebase initialization error', error.stack);
    }
  }

  return firebase;
};
