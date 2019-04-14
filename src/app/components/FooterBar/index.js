import React from 'react';

import styles from './styles';

import Typography from '../Typography';

const FooterBar = () => {
  return (
    <div className="container">
      <div className="content-container">
        <Typography type="small" color="white">
          Footer
        </Typography>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

FooterBar.propTypes = {};
FooterBar.defaultProps = {};

export default FooterBar;
