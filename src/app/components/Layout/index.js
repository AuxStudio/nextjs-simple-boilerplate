import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import HeaderBar from '../HeaderBar';
import FooterBar from '../FooterBar';
import DevInfo from '../DevInfo';

const Layout = ({ headerBarProps, children }) => {
  return (
    <div className="container">
      <HeaderBar {...headerBarProps} />

      <div className="content-container">{children}</div>

      <div className="footer-container">
        <FooterBar />
      </div>

      <div className="dev-info-container">
        <DevInfo />
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Layout.propTypes = {
  headerBarProps: PropTypes.shape({}),
  children: PropTypes.node,
};
Layout.defaultProps = {};

export default Layout;
