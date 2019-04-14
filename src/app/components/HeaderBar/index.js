import React from 'react';
import { AppBar, Toolbar as ToolBar } from '@material-ui/core';
import Link from 'next/link';

import muiStyles from './muiStyles';
import styles from './styles';

const HeaderBar = () => {
  return (
    <AppBar position="fixed" style={muiStyles.wrapper}>
      <ToolBar style={muiStyles.container}>
        <Link href="/">
          <img src="/static/images/logo.png" alt="Pep Logo" className="logo-image" />
        </Link>
      </ToolBar>

      <style jsx>{styles}</style>
    </AppBar>
  );
};

HeaderBar.propTypes = {};
HeaderBar.defaultProps = {};

export default HeaderBar;
