import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const middleware = [];
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['appState'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

middleware.push(sagaMiddleware);

// Only log store actions in development
const isDev = !process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === 'dev';

if (isDev) {
  middleware.push(loggerMiddleware);
}

function configureStore(initialState) {
  const store = createStore(persistedReducer, initialState, applyMiddleware(...middleware));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  // Run the sagas
  store.runSagaTask();

  return store;
}

export default configureStore;
