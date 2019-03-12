import { call, put } from 'redux-saga/effects';

import { auth } from '../../../../services';
import { prepareNextAction } from '../../../../utils';

const { signInWithEmail } = auth;

export default function* saga(action) {
  try {
    const { payload } = action;
    const response = yield call(signInWithEmail, payload);
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
