import { call, put } from 'redux-saga/effects';
import createUID from 'js-simple-utils/dist/createUID'; // FIXME: export correctly

import onError from '../onError';
import { prepareNextAction } from '../../../utils';

/*
  Generic saga:

  - Takes args as first argument { service, shouldTrackEvent }
  -- Service is injected into saga
  -- shouldTrackEvent is passed for event monitoring
  - Takes action as second argument
*/
export default function* genericSaga(args, action) {
  const { service, shouldTrackEvent } = args;

  try {
    const { payload } = action;
    const eventID = shouldTrackEvent && createUID();

    // If shouldTrackEvent
    // Add a pendingTransaction to the store
    if (shouldTrackEvent) {
      yield put({
        type: 'ADD_PENDING_TRANSACTION',
        payload: { event: { action, id: eventID } },
      });
    }

    const response = yield call(service, payload);

    // If shouldTrackEvent
    // Remove this pendingTransaction from the store
    if (shouldTrackEvent) {
      yield put({
        type: 'REMOVE_PENDING_TRANSACTION',
        payload: {
          eventID,
        },
      });
    }

    // Prepare the next action
    // using the previous action's
    // and the response
    const nextAction = prepareNextAction(action, response);

    if (nextAction) {
      yield put(nextAction);
    }
  } catch (error) {
    yield onError(error);
  }
}
