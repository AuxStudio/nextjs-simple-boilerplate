import { call, take, put } from 'redux-saga/effects';

import createChannel from './createChannel';
import { prepareNextAction } from '../../../../utils';

export default function* sync(action) {
  const { meta } = action;
  const { url, query } = meta;
  const channel = yield call(createChannel, { url, query });

  try {
    while (true) {
      const response = yield take(channel);

      // Parse the response into data only
      let data;

      try {
        // is document
        data = response.data();
      } catch (error) {
        // is collection
        data = response.docs.map((document) => {
          return {
            ...document.data(),
            id: document.id,
          };
        });
      }

      const nextAction = prepareNextAction(action, { data });

      if (nextAction) {
        yield put(nextAction);
      }
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
