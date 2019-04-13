import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import types from './types';
import styles from './styles';

const boldText = ['title', 'heading', 'link'];

const TypographyComponent = ({ type, color, bold, center, gutterBottom, children, style }) => {
  const variant = types[type];
  const allStyles = {
    ...(type === 'link' && styles.link),
    ...(color && { color }),
    ...(center && styles.center),
    ...((bold || boldText.includes(type)) && styles.bold),
    ...style,
  };

  return (
    <Typography variant={variant} gutterBottom={gutterBottom} style={allStyles}>
      {children}
    </Typography>
  );
};

TypographyComponent.propTypes = {
  type: PropTypes.oneOf(['title', 'heading', 'paragraph', 'small', 'link']),
  color: PropTypes.string,
  bold: PropTypes.bool,
  center: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: PropTypes.shape({}),
};
TypographyComponent.defaultProps = {};

export default TypographyComponent;
