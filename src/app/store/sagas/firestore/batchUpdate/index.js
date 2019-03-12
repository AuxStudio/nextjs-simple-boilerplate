import { call, put } from 'redux-saga/effects';
import { createUID } from 'js-simple-utils';

import { firestore } from '../../../../services';
import { prepareNextAction } from '../../../../utils';

const { batchUpdate } = firestore;

export default function* saga(action) {
  try {
    const { payload, meta } = action;
    const { url } = meta;
    const { documents } = payload;

    // Add a write event
    const writeEventID = createUID();

    yield put({
      type: 'ADD_PENDING_TRANSACTION',
      payload: {
        event: {
          id: writeEventID,
          action,
        },
      },
    });

    const response = yield call(batchUpdate, { url, documents });

    // We received a response, remove the write event
    yield put({
      type: 'REMOVE_PENDING_TRANSACTION',
      payload: {
        id: writeEventID,
      },
    });

    const nextAction = prepareNextAction(action, response);

    if (nextAction) {
      yield put(nextAction);
    }
  } catch (error) {
    const { message } = error;

    yield put({
      type: 'SET_SYSTEM_MESSAGE',
      payload: {
        message,
        isError: true,
      },
    });
  }
}
