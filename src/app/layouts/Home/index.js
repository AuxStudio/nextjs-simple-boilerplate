import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import { TitleText } from '../../components/Typography';

const Home = () => {
  return (
    <div className="container flex flex-center">
      <TitleText>Hello World</TitleText>

      <style jsx>{styles}</style>
    </div>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
