import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Typography from '../../components/Typography';

const Home = () => {
  return (
    <div className="container">
      <Typography type="title">Hello World</Typography>

      <style jsx>{styles}</style>
    </div>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
