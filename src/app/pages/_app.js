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
import DataHandler from '../handlers/DataHandler';
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

            <Component {...pageProps} />

            <DataHandler />

            <PageLoadingHandler />

            <SystemMessageHandler />
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(TheApp));
