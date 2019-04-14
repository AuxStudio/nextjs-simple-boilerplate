import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '@material-ui/core';

import styles from './styles';

import Icon from '../Icon';

const PrimaryButton = ({
  type,
  href,
  iconName,
  secondary,
  small,
  ghost,
  children,
  disabled,
  handleClick,
}) => {
  const style = {
    ...styles.container,
    ...(!secondary && !ghost && !disabled && { color: 'white' }),
  };

  const iconComponent = iconName && (
    <Fragment>
      <Icon name={iconName} /> <div style={styles.spacer} />
    </Fragment>
  );

  const buttonComponent = (
    <Button
      type={type}
      variant={ghost ? 'outlined' : 'contained'}
      color={secondary ? 'secondary' : 'primary'}
      size={small ? 'small' : 'large'}
      style={style}
      disabled={disabled}
      onClick={handleClick}
    >
      {iconComponent}

      {children}
    </Button>
  );

  if (href) {
    return <Link href={href}>{buttonComponent}</Link>;
  }

  return buttonComponent;
};

PrimaryButton.propTypes = {
  type: PropTypes.string, // e.g. submit
  href: PropTypes.string,
  iconName: PropTypes.string,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  ghost: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};
PrimaryButton.defaultProps = {};

export default PrimaryButton;
