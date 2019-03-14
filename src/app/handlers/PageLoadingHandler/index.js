import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';

import Spinner from '../../components/Spinner';

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
    pendingTransactions: PropTypes.arrayOf(PropTypes.shape({})),
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    Router.events.on('routeChangeStart', this.onRouteChangeStart);
    Router.events.on('routeChangeComplete', this.onRouteChangeComplete);
  }

  componentDidUpdate(prevProps) {
    const { pendingTransactions } = this.props;

    // IF pt has length
    // IF previous pt does not have length
    // THEN we are loading
    if (pendingTransactions.length && !prevProps.pendingTransactions.length) {
      this.setSavingSystemMessage();
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

  setSavingSystemMessage() {
    const { dispatch } = this.props;

    dispatch({
      type: 'SET_SYSTEM_MESSAGE',
      payload: {
        message: 'Saving',
        isLoading: true,
      },
    });
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="fixed stretch flex-center">
          <Spinner />
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  const { appState } = state;
  const { pendingTransactions } = appState;

  return {
    pendingTransactions,
  };
};

export default connect(mapStateToProps)(PageLoadingHandler);
