import { cloneObject } from 'js-simple-utils';

import initialState from './initialState';

export default function reducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SIGN_IN_USER':
      newState = cloneObject(state);
      newState = action.payload.user;
      return newState;

    case 'SIGN_OUT_USER':
      newState = cloneObject(state);
      newState = initialState;
      return newState;

    default:
      return state;
  }
}
