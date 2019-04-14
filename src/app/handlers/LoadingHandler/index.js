import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';

import styles from './styles';

import PageLoader from './PageLoader';
import LinearProgress from './LinearProgress';

export class LoadingHandler extends React.Component {
  constructor(props) {
    super(props);

    this.onRouteChangeStart = this.onRouteChangeStart.bind(this);
    this.onRouteChangeComplete = this.onRouteChangeComplete.bind(this);
    this.setIsPageLoading = this.setIsPageLoading.bind(this);

    this.state = {
      isPageLoading: false,
    };
  }

  static propTypes = {
    isSaving: PropTypes.bool,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {};

  componentDidMount() {
    Router.events.on('routeChangeStart', this.onRouteChangeStart);
    Router.events.on('routeChangeComplete', this.onRouteChangeComplete);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onRouteChangeStart);
    Router.events.off('routeChangeComplete', this.onRouteChangeComplete);
  }

  onRouteChangeStart() {
    this.setIsPageLoading(true);
  }

  onRouteChangeComplete() {
    this.setIsPageLoading(false);
  }

  setIsPageLoading(isPageLoading) {
    this.setState({
      isPageLoading,
    });
  }

  render() {
    const { isPageLoading } = this.state;
    const { isSaving, isLoading } = this.props;

    if (isPageLoading) {
      return <PageLoader />;
    }

    if (isSaving || isLoading) {
      return (
        <div className="linear-progress-container">
          <LinearProgress />

          <style jsx>{styles}</style>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  const { appState } = state;
  const { pendingTransactions, systemMessage, isLoading } = appState;
  const { message } = systemMessage;

  // Saving if we have pendingTransactions but we don't have an error message
  const isSaving = pendingTransactions.length && !message ? true : false;

  return {
    isSaving,
    isLoading,
  };
};

export default connect(mapStateToProps)(LoadingHandler);
