import { takeEvery } from 'redux-saga/effects';

import { signInWithEmail, signOut } from './auth';
import { batchUpdate, setDocument, sync } from './firestore';

export default function* sagas() {
  yield takeEvery('signInWithEmail', signInWithEmail);
  yield takeEvery('signOut', signOut);
  yield takeEvery('batchUpdate', batchUpdate);
  yield takeEvery('setDocument', setDocument);
  yield takeEvery('sync', sync);
}
