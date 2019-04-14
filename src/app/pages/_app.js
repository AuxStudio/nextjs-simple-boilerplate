import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { global, theme } from '../static/styles';
import configureStore from '../store';

import Head from '../components/Head';
import DevInfo from '../components/DevInfo';

import AnalyticsHandler from '../handlers/AnalyticsHandler';
import AuthHandler from '../handlers/AuthHandler';
import DataSyncingHandler from '../handlers/DataSyncingHandler';
import ErrorHandler from '../handlers/ErrorHandler';
import LoadingHandler from '../handlers/LoadingHandler';
import SystemMessageHandler from '../handlers/SystemMessageHandler';

export class TheApp extends App {
  constructor(props) {
    super(props);

    this.persistor = persistStore(props.store);
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Helper to purge persistor
    // this.persistor.purge();
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <ErrorHandler>
          <Container>
            <Provider store={store}>
              <PersistGate loading={null} persistor={this.persistor}>
                <Head />

                <style jsx global>
                  {global}
                </style>

                <SystemMessageHandler>
                  <Component {...pageProps} />

                  <AnalyticsHandler />

                  <AuthHandler />

                  <DataSyncingHandler />

                  <LoadingHandler />

                  <DevInfo />
                </SystemMessageHandler>
              </PersistGate>
            </Provider>
          </Container>
        </ErrorHandler>
      </MuiThemeProvider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(TheApp));
