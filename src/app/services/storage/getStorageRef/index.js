import firebase from '../../firebase';

export default async () => {
  const fb = await firebase();

  try {
    const ref = fb.storage().ref();

    return ref;
  } catch (error) {
    throw error;
  }
};
