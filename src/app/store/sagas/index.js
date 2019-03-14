import { takeEvery } from 'redux-saga/effects';

import { logEvent } from '../../services/analytics';
import { getAuth, signInAnonymously, signInWithEmail, signOut } from '../../services/auth';
import {
  addDocument,
  batchUpdate,
  deleteDocument,
  disableNetwork,
  enableNetwork,
  getCollection,
  getDocument,
  getRef,
  setDocument,
  sync,
  updateDocument,
} from '../../services/firestore';
import { get, post } from '../../services/http';
import { deleteFile, getStorageRef, uploadFile } from '../../services/storage';

import saga from './saga';

export default function* sagas() {
  // Analytics
  yield takeEvery('logEvent', saga, { service: logEvent, shouldTrackEvent: false });

  // Auth
  yield takeEvery('getAuth', saga, { service: getAuth, shouldTrackEvent: false });
  yield takeEvery('signInAnonymously', saga, {
    service: signInAnonymously,
    shouldTrackEvent: false,
  });
  yield takeEvery('signInWithEmail', saga, { service: signInWithEmail, shouldTrackEvent: false });
  yield takeEvery('signOut', saga, { service: signOut, shouldTrackEvent: false });

  // Firestore
  yield takeEvery('addDocument', saga, { service: addDocument, shouldTrackEvent: false });
  yield takeEvery('batchUpdate', saga, { service: batchUpdate, shouldTrackEvent: false });
  yield takeEvery('deleteDocument', saga, { service: deleteDocument, shouldTrackEvent: false });
  yield takeEvery('disableNetwork', saga, { service: disableNetwork, shouldTrackEvent: false });
  yield takeEvery('enableNetwork', saga, { service: enableNetwork, shouldTrackEvent: false });
  yield takeEvery('getCollection', saga, { service: getCollection, shouldTrackEvent: false });
  yield takeEvery('getDocument', saga, { service: getDocument, shouldTrackEvent: false });
  yield takeEvery('getRef', saga, { service: getRef, shouldTrackEvent: false });
  yield takeEvery('setDocument', saga, { service: setDocument, shouldTrackEvent: false });
  yield takeEvery('sync', saga, { service: sync, shouldTrackEvent: false });
  yield takeEvery('updateDocument', saga, { service: updateDocument, shouldTrackEvent: false });

  // HTTP
  yield takeEvery('get', saga, { service: get, shouldTrackEvent: false });
  yield takeEvery('post', saga, { service: post, shouldTrackEvent: false });

  // Storage
  yield takeEvery('deleteFile', saga, { service: deleteFile, shouldTrackEvent: false });
  yield takeEvery('getStorageRef', saga, { service: getStorageRef, shouldTrackEvent: false });
  yield takeEvery('uploadFile', saga, { service: uploadFile, shouldTrackEvent: false });
}
