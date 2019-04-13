import { takeEvery } from 'redux-saga/effects';

import { logEvent } from '../../services/analytics';
import {
  getAuth,
  getPhoneAuthCredential,
  linkWithCredential,
  signInAnonymously,
  signInWithEmail,
  signInWithPhoneNumber,
  signOut,
} from '../../services/auth';
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

import eventChannelSaga from './eventChannelSaga';
import genericSaga from './genericSaga';

export default function* sagas() {
  // Analytics
  yield takeEvery('logEvent', genericSaga, { service: logEvent });

  // Auth
  yield takeEvery('getAuth', eventChannelSaga, { service: getAuth });
  yield takeEvery('getPhoneAuthCredential', genericSaga, { service: getPhoneAuthCredential });
  yield takeEvery('linkWithCredential', genericSaga, { service: linkWithCredential });
  yield takeEvery('signInAnonymously', genericSaga, {
    service: signInAnonymously,
    shouldTrackEvent: false,
  });
  yield takeEvery('signInWithEmail', genericSaga, { service: signInWithEmail });
  yield takeEvery('signInWithPhoneNumber', genericSaga, { service: signInWithPhoneNumber });
  yield takeEvery('signOut', genericSaga, { service: signOut });

  // Firestore
  yield takeEvery('addDocument', genericSaga, { service: addDocument, shouldTrackEvent: true });
  yield takeEvery('batchUpdate', genericSaga, { service: batchUpdate, shouldTrackEvent: true });
  yield takeEvery('deleteDocument', genericSaga, {
    service: deleteDocument,
    shouldTrackEvent: true,
  });
  yield takeEvery('disableNetwork', genericSaga, { service: disableNetwork });
  yield takeEvery('enableNetwork', genericSaga, { service: enableNetwork });
  yield takeEvery('getCollection', genericSaga, { service: getCollection, shouldTrackEvent: true });
  yield takeEvery('getDocument', genericSaga, { service: getDocument, shouldTrackEvent: true });
  yield takeEvery('getRef', genericSaga, { service: getRef });
  yield takeEvery('setDocument', genericSaga, { service: setDocument, shouldTrackEvent: true });
  yield takeEvery('sync', eventChannelSaga, {
    service: sync,
    shouldTrackEvent: true,
  });
  yield takeEvery('updateDocument', genericSaga, {
    service: updateDocument,
    shouldTrackEvent: true,
  });

  // HTTP
  yield takeEvery('get', genericSaga, { service: get, shouldTrackEvent: true });
  yield takeEvery('post', genericSaga, { service: post, shouldTrackEvent: true });

  // Storage
  yield takeEvery('deleteFile', genericSaga, { service: deleteFile, shouldTrackEvent: true });
  yield takeEvery('getStorageRef', genericSaga, { service: getStorageRef });
  yield takeEvery('uploadFile', genericSaga, { service: uploadFile, shouldTrackEvent: true });
}
