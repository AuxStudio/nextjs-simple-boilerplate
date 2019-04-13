import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Typography from '../Typography';

const Version = ({ children }) => {
  return (
    <div className="container fixed">
      <Typography type="small">{children}</Typography>

      <style jsx>{styles}</style>
    </div>
  );
};

Version.propTypes = {
  children: PropTypes.node,
};
Version.defaultProps = {};

export default Version;
