import React from 'react';

import styles from './styles';

/*
 * Wrap this in a containing div with position: relative
 */
const TextLoading = () => {
  return (
    <div className="wrapper">
      <div className="container" />

      <style jsx>{styles}</style>
    </div>
  );
};

TextLoading.propTypes = {};
TextLoading.defaultProps = {};

export default TextLoading;
