import batchUpdate from './batchUpdate';
import setDocument from './setDocument';
import sync from './sync';

const firestore = {
  batchUpdate,
  setDocument,
  sync,
};

export { batchUpdate, setDocument, sync };

export default firestore;
