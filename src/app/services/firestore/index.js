import batchUpdate from './batchUpdate';
import getRef from './getRef';
import setDocument from './setDocument';
import sync from './sync';

const firestore = {
  batchUpdate,
  getRef,
  setDocument,
  sync,
};

export { batchUpdate, getRef, setDocument, sync };

export default firestore;
