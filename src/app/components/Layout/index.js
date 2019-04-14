import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Head from '../Head';
import HeaderBar from '../HeaderBar';
import FooterBar from '../FooterBar';

const Layout = ({ title, description, children }) => {
  return (
    <div className="container">
      <Head title={title} description={description} />

      <HeaderBar />

      <div className="content-container">{children}</div>

      <div className="footer-container">
        <FooterBar />
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
Layout.defaultProps = {};

export default Layout;
