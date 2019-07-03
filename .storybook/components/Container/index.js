import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};
Container.defaultProps = {};

export default Container;
