import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Home = () => {
  return (
    <div className="container">
      <h1>Hello World</h1>

      <style jsx>{styles}</style>
    </div>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
