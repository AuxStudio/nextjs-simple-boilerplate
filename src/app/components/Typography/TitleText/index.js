import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const TitleText = ({ children }) => {
  return (
    <Fragment>
      <h1>{children}</h1>

      <style jsx>{styles}</style>
    </Fragment>
  );
};

TitleText.propTypes = {
  children: PropTypes.string,
};
TitleText.defaultProps = {};

export default TitleText;
