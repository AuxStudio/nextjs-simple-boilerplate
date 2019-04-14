import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Typography from '../Typography';

const Error = ({ errorMessage }) => {
  return (
    <div className="container">
      <Typography type="title">Error</Typography>

      <Typography type="paragraph">{errorMessage}</Typography>

      <style jsx>{styles}</style>
    </div>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
};
Error.defaultProps = {};

export default Error;
