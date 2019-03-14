import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Snackbar from '../../components/Snackbar';

export class SystemMessageHandler extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.resetSystemMessage = this.resetSystemMessage.bind(this);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func,
    systemMessage: PropTypes.shape({}),
  };

  static defaultProps = {};

  onClose() {
    this.resetSystemMessage();
  }

  resetSystemMessage() {
    const { dispatch } = this.props;

    dispatch({
      type: 'RESET_SYSTEM_MESSAGE',
    });
  }

  render() {
    const { systemMessage } = this.props;
    const { message } = systemMessage;

    return message && <Snackbar {...systemMessage} handleClose={this.onClose} />;
  }
}

function mapStateToProps(state) {
  const { appState } = state;
  const { systemMessage } = appState;

  return {
    systemMessage,
  };
}

export default connect(mapStateToProps)(SystemMessageHandler);
