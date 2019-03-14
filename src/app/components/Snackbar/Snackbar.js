import React from 'react';
import PropTypes from 'prop-types';

import { styleConstants } from '../../config';
import styles from './styles';

import Icon from '../Icon';
import Spinner from '../Spinner';
import { SmallText } from '../Typography';

const { colors } = styleConstants;

const Snackbar = ({ message, isInfo, isLoading, isSuccess, isError, shouldAnimateOut }) => {
  const iconName = isInfo ? 'info-outline' : isSuccess ? 'check' : isError ? 'error-outline' : null;
  const iconColor = isSuccess ? colors.green : isError ? colors.red : 'white';
  const iconComponent = isLoading ? <Spinner small /> : <Icon name={iconName} color={iconColor} />;

  return (
    <div className={`wrapper shadow-lg animate-in ${shouldAnimateOut ? 'animate-out' : ''}`}>
      <div className="container row">
        {iconComponent}

        <div className="spacer-hz small" />

        <SmallText white>{message}</SmallText>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string,
  isInfo: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  shouldAnimateOut: PropTypes.bool,
};
Snackbar.defaultProps = {};

export default Snackbar;
