import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';

import SnackbarHandler from './SnackbarHandler';

const SystemMessageHandler = ({ children }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Fragment>
        {children}

        <SnackbarHandler />
      </Fragment>
    </SnackbarProvider>
  );
};

SystemMessageHandler.propTypes = {
  children: PropTypes.node,
};
SystemMessageHandler.defaultProps = {};

export default SystemMessageHandler;
