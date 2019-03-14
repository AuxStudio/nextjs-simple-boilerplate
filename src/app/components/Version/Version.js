import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import { SmallText } from '../Typography';

const Version = ({ children }) => {
  return (
    <div className="container fixed">
      <SmallText>{children}</SmallText>

      <style jsx>{styles}</style>
    </div>
  );
};

Version.propTypes = {
  children: PropTypes.node,
};
Version.defaultProps = {};

export default Version;
