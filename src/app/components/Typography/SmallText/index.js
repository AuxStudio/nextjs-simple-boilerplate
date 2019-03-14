import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const SmallText = ({ children, white }) => {
  return (
    <Fragment>
      <small className={white ? 'white' : ''}>{children}</small>

      <style jsx>{styles}</style>
    </Fragment>
  );
};

SmallText.propTypes = {
  children: PropTypes.any, // eslint-disable-line
  white: PropTypes.bool,
};
SmallText.defaultProps = {};

export default SmallText;
