import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ParagraphText = ({ children, className, white, style }) => {
  return (
    <Fragment>
      <p className={`${className} ${white ? 'white' : ''}`} style={style}>
        {children}
      </p>

      <style jsx>{styles}</style>
    </Fragment>
  );
};

ParagraphText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  white: PropTypes.bool,
  style: PropTypes.shape({}),
};
ParagraphText.defaultProps = {};

export default ParagraphText;
