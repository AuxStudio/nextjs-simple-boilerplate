import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Spinner = ({ small }) => {
  return (
    <div className={`container ${small ? 'small' : ''}`}>
      <style jsx>{styles}</style>
    </div>
  );
};

Spinner.propTypes = {
  small: PropTypes.bool,
};
Spinner.defaultProps = {};

export default Spinner;
