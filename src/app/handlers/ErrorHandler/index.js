import React from 'react';
import PropTypes from 'prop-types';

import Error from '../../layouts/Error';

export class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);

    this.setErrorMessage = this.setErrorMessage.bind(this);

    this.state = {
      errorMessage: null,
    };
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {};

  componentDidCatch(error) {
    const { message } = error;

    this.setErrorMessage(message);
  }

  setErrorMessage(errorMessage) {
    this.setState({ errorMessage });
  }

  render() {
    const { errorMessage } = this.state;
    const { children } = this.props;

    if (errorMessage) {
      return <Error errorMessage={errorMessage} />;
    }

    return children;
  }
}

export default ErrorHandler;
