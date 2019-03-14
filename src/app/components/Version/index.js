import React from 'react';

import { version } from '../../config';

import Version from './Version';

const VersionContainer = () => {
  const env = process.env.REACT_APP_ENV || 'dev';
  const isProduction = env === 'prod';

  if (isProduction) {
    return null;
  }

  const text = `${version.major}.${version.minor}.${version.patch} - ${version.build} (${env})`;

  return <Version>{text}</Version>;
};

VersionContainer.propTypes = {};
VersionContainer.defaultProps = {};

export default VersionContainer;
