import React from 'react';

import CircularProgress from '../../../components/CircularProgress';

import styles from './styles';

const PageLoader = () => {
  return (
    <div className="container">
      <CircularProgress />

      <style jsx>{styles}</style>
    </div>
  );
};

PageLoader.propTypes = {};
PageLoader.defaultProps = {};

export default PageLoader;
