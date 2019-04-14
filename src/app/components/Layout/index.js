import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import HeaderBar from '../HeaderBar';
import FooterBar from '../FooterBar';

const Layout = ({ children }) => {
  return (
    <div className="container">
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
  children: PropTypes.node,
};
Layout.defaultProps = {};

export default Layout;
