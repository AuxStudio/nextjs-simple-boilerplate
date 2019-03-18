import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';

import CircularProgress from '../../components/CircularProgress';
import LinearProgress from '../../components/LinearProgress';

export class PageLoadingHandler extends React.Component {
  constructor(props) {
    super(props);

    this.onRouteChangeStart = this.onRouteChangeStart.bind(this);
    this.onRouteChangeComplete = this.onRouteChangeComplete.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.setSavingSystemMessage = this.setSavingSystemMessage.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  static propTypes = {
    isSaving: PropTypes.bool,
    dispatch: PropTypes.func,
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

  setSavingSystemMessage() {
    // TODO:
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'SET_SYSTEM_MESSAGE',
    //   payload: {
    //     message: 'Saving',
    //     isLoading: true,
    //   },
    // });
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

export default connect(mapStateToProps)(PageLoadingHandler);
