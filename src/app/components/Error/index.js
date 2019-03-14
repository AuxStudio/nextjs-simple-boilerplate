import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import { TitleText, ParagraphText } from '../Typography';

const Error = ({ errorMessage }) => {
  return (
    <div className="container">
      <TitleText>Error</TitleText>

      <ParagraphText>{errorMessage}</ParagraphText>

      <style jsx>{styles}</style>
    </div>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
};
Error.defaultProps = {};

export default Error;
