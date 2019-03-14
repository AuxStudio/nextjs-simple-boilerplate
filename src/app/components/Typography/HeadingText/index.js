import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const HeadingText = ({ children }) => {
  return (
    <Fragment>
      <h2>{children}</h2>

      <style jsx>{styles}</style>
    </Fragment>
  );
};

HeadingText.propTypes = {
  children: PropTypes.string,
};
HeadingText.defaultProps = {};

export default HeadingText;
