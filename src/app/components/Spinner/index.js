import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { styleConstants } from '../../config';

const { colors } = styleConstants;

const Spinner = ({ small }) => {
  const size = small ? 20 : 40;

  return <CircularProgress size={size} style={{ color: colors.primary }} />;
};

Spinner.propTypes = {
  small: PropTypes.bool,
};
Spinner.defaultProps = {};

export default Spinner;
