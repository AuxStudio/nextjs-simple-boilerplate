import { cloneObject } from 'js-simple-utils';

import initialState from './initialState';

export default function reducer(state = initialState, action = {}) {
  let newState;
  const { payload } = cloneObject(action);

  switch (action.type) {
    case 'SET_SYSTEM_MESSAGE':
      newState = cloneObject(state);
      newState.systemMessage = payload;
      return newState;

    case 'RESET_SYSTEM_MESSAGE':
      newState = cloneObject(state);
      newState.systemMessage = initialState.systemMessage;
      return newState;

    case 'ADD_PENDING_TRANSACTION':
      newState = cloneObject(state);
      newState.pendingTransactions.push(payload.event);
      return newState;

    case 'REMOVE_PENDING_TRANSACTION':
      newState = cloneObject(state);
      newState.pendingTransactions = newState.pendingTransactions.filter((event) => {
        return event.id !== payload.eventID;
      });
      return newState;

    case 'RESET_PENDING_TRANSACTIONS':
      newState = cloneObject(state);
      newState.pendingTransactions = initialState.pendingTransactions;
      return newState;

    case 'ADD_SYNCED_TRANSACTION':
      newState = cloneObject(state);
      newState.syncedTransactions.push(payload.event);
      return newState;

    case 'SET_IS_LOADING':
      newState = cloneObject(state);
      newState.isLoading = payload.isLoading;
      return newState;

    case 'SET_IS_SAVING':
      newState = cloneObject(state);
      newState.isSaving = payload.isSaving;
      return newState;

    case 'SET_IS_SYNCING':
      newState = cloneObject(state);
      newState.isSyncing = payload.isSyncing;
      return newState;

    default:
      return state;
  }
}
