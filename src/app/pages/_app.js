import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { global, helpers } from '../static/styles';
import configureStore from '../store';

import Head from '../components/Head';
import Version from '../components/Version';

import AnalyticsHandler from '../handlers/AnalyticsHandler';
import DataHandler from '../handlers/DataHandler';
import ErrorHandler from '../handlers/ErrorHandler';
import PageLoadingHandler from '../handlers/PageLoadingHandler';
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
      <ErrorHandler>
        <Container>
          <Provider store={store}>
            <PersistGate loading={null} persistor={this.persistor}>
              <Head />

              <style jsx global>
                {global}
              </style>

              <style jsx global>
                {helpers}
              </style>

              <SystemMessageHandler>
                <Component {...pageProps} />

                <AnalyticsHandler />

                <DataHandler />

                <PageLoadingHandler />

                <Version />
              </SystemMessageHandler>
            </PersistGate>
          </Provider>
        </Container>
      </ErrorHandler>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(TheApp));
