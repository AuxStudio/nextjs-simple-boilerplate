import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';

import { snackbar } from '../../config';

import CircularProgress from '../../components/CircularProgress';
import LinearProgress from '../../components/LinearProgress';

export class PageLoadingHandler extends React.Component {
  constructor(props) {
    super(props);

    this.onRouteChangeStart = this.onRouteChangeStart.bind(this);
    this.onRouteChangeComplete = this.onRouteChangeComplete.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.setSavedMessage = this.setSavedMessage.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  static propTypes = {
    isSaving: PropTypes.bool,
    enqueueSnackbar: PropTypes.func, // notistack
  };

  static defaultProps = {};

  componentDidMount() {
    Router.events.on('routeChangeStart', this.onRouteChangeStart);
    Router.events.on('routeChangeComplete', this.onRouteChangeComplete);
  }

  componentDidUpdate(prevProps) {
    const { isSaving } = this.props;

    if (!isSaving && prevProps.isSaving) {
      this.setSavedMessage();
    }
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onRouteChangeStart);
    Router.events.off('routeChangeComplete', this.onRouteChangeComplete);
  }

  onRouteChangeStart() {
    this.setIsLoading(true);
  }

  onRouteChangeComplete() {
    this.setIsLoading(false);
  }

  setIsLoading(isLoading) {
    this.setState({
      isLoading,
    });
  }

  setSavedMessage() {
    const { enqueueSnackbar } = this.props;

    enqueueSnackbar('Saved successfully', { ...snackbar, variant: 'success' });
  }

  render() {
    const { isLoading } = this.state;
    const { isSaving } = this.props;

    if (isLoading) {
      return (
        <div className="flex fixed stretch flex-center">
          <CircularProgress />
        </div>
      );
    }

    if (isSaving) {
      return (
        <div className="flex fixed stretch">
          <LinearProgress />
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  const { appState } = state;
  const { pendingTransactions } = appState;
  const isSaving = pendingTransactions.length ? true : false;

  return {
    isSaving,
  };
};

export default withSnackbar(connect(mapStateToProps)(PageLoadingHandler));
