import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../../src/app/store/reducers';

const store = createStore(reducers);

const withStore = (story) => <Provider store={store}>{story()}</Provider>;

export default withStore;
