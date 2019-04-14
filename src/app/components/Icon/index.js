import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import icons from './icons';
import styles from './styles';

const IconComponent = ({ name, size, color }) => {
  let iconComponent;

  if (name) {
    const Icon = icons[name];
    iconComponent = <Icon style={{ fill: color, fontSize: size }} />;
  }

  return (
    <Fragment>
      {iconComponent}

      <style jsx>{styles}</style>
    </Fragment>
  );
};

IconComponent.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
IconComponent.defaultProps = {};

export default IconComponent;
