import firebase from '../../firebase';
import getRef from '../getRef';

// FIXME: Use Promises
export default async ({ url, documents }) => {
  const collectionRef = await getRef(url);
  const fb = await firebase();
  const db = fb.firestore();
  const batch = db.batch();

  // Add updates to the batch
  try {
    documents.forEach(async (document) => {
      const { id } = document;
      const documentRef = collectionRef.doc(id);

      batch.update(documentRef, document);

      return null;
    });
  } catch (error) {
    throw error;
  }

  // Commit the batch
  try {
    await batch.commit();
  } catch (error) {
    throw error;
  }
};
