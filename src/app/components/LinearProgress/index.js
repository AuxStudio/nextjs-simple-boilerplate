import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const LinearProgressComponent = ({ classes }) => {
  return (
    <LinearProgress classes={{ colorPrimary: classes.container, barColorPrimary: classes.bar }} />
  );
};

LinearProgressComponent.propTypes = {
  classes: PropTypes.shape({}),
};
LinearProgressComponent.defaultProps = {};

export default withStyles(styles)(LinearProgressComponent);
