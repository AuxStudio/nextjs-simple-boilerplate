import firebase from '../../firebase';

// Takes a string of url format, collction/
// e.g. collection/doc/collection/doc
// and returns a firestore ref
export default (url) => {
  return new Promise(async (resolve) => {
    const fb = await firebase();

    let ref = fb.firestore();
    const pathParts = url.split('/');
    let isCollection = true;

    pathParts.forEach((pathPart) => {
      ref = isCollection ? ref.collection(pathPart) : ref.doc(pathPart);
      isCollection = !isCollection;
    });

    resolve(ref);
  });
};
