import { cloneObject } from 'js-simple-utils';

import initialState from './initialState';

export default function reducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case 'SET_SYSTEM_MESSAGE':
      newState = cloneObject(state);
      newState.systemMessage = action.payload;
      return newState;

    case 'RESET_SYSTEM_MESSAGE':
      newState = cloneObject(state);
      newState.systemMessage = initialState.systemMessage;
      return newState;

    case 'ADD_PENDING_TRANSACTION':
      newState = cloneObject(state);
      newState.pendingTransactions.push(action.payload.event);
      return newState;

    case 'REMOVE_PENDING_TRANSACTION':
      newState = cloneObject(state);
      newState.pendingTransactions = newState.pendingTransactions.filter((event) => {
        return event.id !== action.payload.eventID;
      });
      return newState;

    case 'RESET_PENDING_TRANSACTIONS':
      newState = cloneObject(state);
      newState.pendingTransactions = initialState.pendingTransactions;
      return newState;

    case 'ADD_SYNCED_TRANSACTION':
      newState = cloneObject(state);
      newState.syncedTransactions.push(action.payload.event);
      return newState;

    case 'SET_IS_LOADING':
      newState = cloneObject(state);
      newState.isLoading = action.payload.isLoading;
      return newState;

    case 'SET_IS_SAVING':
      newState = cloneObject(state);
      newState.isSaving = action.payload.isSaving;
      return newState;

    case 'SET_IS_SYNCING':
      newState = cloneObject(state);
      newState.isSyncing = action.payload.isSyncing;
      return newState;

    default:
      return state;
  }
}
