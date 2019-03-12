import { eventChannel } from 'redux-saga';

import { firestore } from '../../../../../services';

export default function createChannel({ url, query }) {
  return eventChannel((emit) => {
    firestore.sync({ url, query }, emit);

    // The subscriber must return an unsubscribe function
    return () => {};
  });
}
