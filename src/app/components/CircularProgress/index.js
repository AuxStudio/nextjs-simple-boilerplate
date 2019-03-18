import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const CircularProgressComponent = ({ classes }) => {
  return <CircularProgress classes={{ colorPrimary: classes.container }} />;
};

CircularProgressComponent.propTypes = {
  classes: PropTypes.shape({}),
};
CircularProgressComponent.defaultProps = {};

export default withStyles(styles)(CircularProgressComponent);
