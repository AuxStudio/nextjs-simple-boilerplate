import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { snackbar } from '../../../config';

export class SnackbarHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func,
    systemMessage: PropTypes.shape({
      message: PropTypes.string,
    }),
    enqueueSnackbar: PropTypes.func, // notistack
  };

  static defaultProps = {};

  componentDidUpdate(prevProps) {
    const { systemMessage, enqueueSnackbar } = this.props;
    const { message, variant } = systemMessage;

    if (message && message !== prevProps.systemMessage.message) {
      enqueueSnackbar(message, {
        ...snackbar,
        variant,
        action: (
          <IconButton>
            <CloseIcon style={{ color: 'white' }} />
          </IconButton>
        ),
      });
    }
  }

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
    return null;
  }
}

function mapStateToProps(state) {
  const { appState } = state;
  const { systemMessage } = appState;

  return {
    systemMessage,
  };
}

export default withSnackbar(connect(mapStateToProps)(SnackbarHandler));
