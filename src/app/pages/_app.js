import React from 'react';
import App, { Container } from 'next/app';

import styles from '../static/styles/global';

export class TheApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />

        <style jsx global>
          {styles}
        </style>
      </Container>
    );
  }
}

export default TheApp;
