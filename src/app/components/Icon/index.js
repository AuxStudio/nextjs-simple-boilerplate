import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ICONS from './icons';

const IconComponent = ({ name, size, color }) => {
  let iconComponent;

  if (name) {
    const Icon = ICONS[name];
    iconComponent = <Icon size={size} color={color} />;
  }

  return <Fragment>{iconComponent}</Fragment>;
};

IconComponent.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
IconComponent.defaultProps = {
  size: 24,
  color: 'black',
};

export default IconComponent;
