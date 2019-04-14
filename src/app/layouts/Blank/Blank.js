import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Blank = () => {
  return (
    <div>
      <style jsx>{styles}</style>
    </div>
  );
};

Blank.propTypes = {};
Blank.defaultProps = {};

export default Blank;
