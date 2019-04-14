import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <Typography type="title">Hello World</Typography>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
