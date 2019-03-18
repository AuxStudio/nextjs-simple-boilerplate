import { call, put } from 'redux-saga/effects';
import createUID from 'js-simple-utils/dist/createUID'; // FIXME: export correctly

import { prepareNextAction } from '../../../utils';

/*
  Generic saga:

  - Takes args as first argument { service, shouldTrackEvent }
  -- Service is injected into saga
  -- shouldTrackEvent is passed for event monitoring
  - Takes action as second argument
*/
export default function* saga(args, action) {
  const { service, shouldTrackEvent } = args;

  try {
    const { payload } = action;
    const eventID = shouldTrackEvent && createUID();

    if (shouldTrackEvent) {
      yield put({
        type: 'ADD_PENDING_TRANSACTION',
        payload: { event: { action, id: eventID } },
      });
    }

    const response = yield call(service, { ...payload });
    const nextAction = prepareNextAction(action, response);

    if (shouldTrackEvent) {
      yield put({
        type: 'REMOVE_PENDING_TRANSACTION',
        payload: {
          eventID,
        },
      });
    }

    if (nextAction) {
      yield put(nextAction);
    }
  } catch (error) {
    const { message } = error;

    yield put({
      type: 'SET_SYSTEM_MESSAGE',
      payload: {
        message,
        variant: 'error',
      },
    });
  }
}
