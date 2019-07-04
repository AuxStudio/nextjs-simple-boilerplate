import { cloneObject } from 'js-simple-utils';

import initialState from './initialState';

// TODO: Update this reducer name
export default function genericDataReducer(state = initialState, action = {}) {
  let newState;
  const { payload } = cloneObject(action);

  switch (action.type) {
    case 'SET_GENERIC_DATA': // TODO: Update this
      newState = cloneObject(state);
      newState.data = payload.data;
      newState.dateModified = payload.dateModified;
      return newState;

    default:
      return state;
  }
}
