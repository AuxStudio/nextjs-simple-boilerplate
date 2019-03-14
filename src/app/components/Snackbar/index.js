import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from './Snackbar';

export class SnackbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.setShouldAnimateOut = this.setShouldAnimateOut.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);

    this.timer = null;

    this.state = {
      shouldAnimateOut: false,
    };
  }

  static propTypes = {
    message: PropTypes.string,
    isLoading: PropTypes.bool,
    handleClose: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    const { isLoading } = this.props;

    // Only auto hide if its not the loading state
    if (!isLoading) {
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps) {
    const { message, isLoading } = this.props;

    // IF the message changed
    // IF its not a loading message
    // THEN auto hide
    if (message !== prevProps.message) {
      if (this.timer) {
        this.clearTimer();
      }

      // Only auto hide if its not the loading state
      if (!isLoading) {
        this.startTimer();
      }
    }
  }

  handleClose() {
    const { handleClose } = this.props;

    this.setShouldAnimateOut(true);

    setTimeout(handleClose, 500);
  }

  setShouldAnimateOut(shouldAnimateOut) {
    this.setState({
      shouldAnimateOut,
    });
  }

  startTimer() {
    this.timer = setTimeout(this.handleClose, 3000);
  }

  clearTimer() {
    clearTimeout(this.timer);
  }

  render() {
    const { shouldAnimateOut } = this.state;

    return <Snackbar {...this.props} shouldAnimateOut={shouldAnimateOut} />;
  }
}

export default SnackbarContainer;
