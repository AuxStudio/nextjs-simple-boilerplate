import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Typography from '../Typography';

const DevInfo = ({ env, version, uid, isAnonymous }) => {
  const versionText = `${version.major}.${version.minor}.${version.patch} - ${
    version.build
  } (${env})`;
  const uidText = `uid: ${uid ? `${uid.substring(0, 6)} ......` : 'null'}${
    uid ? (isAnonymous ? ' (anonymous)' : ' (authed)') : ''
  }`;

  return (
    <div className="container">
      <Typography type="small" color="white">
        {versionText}
      </Typography>

      <div className="spacer" />

      <Typography type="small" color="white">
        {uidText}
      </Typography>

      <style jsx>{styles}</style>
    </div>
  );
};

DevInfo.propTypes = {
  env: PropTypes.string,
  version: PropTypes.shape({
    major: PropTypes.number,
    minor: PropTypes.number,
    patch: PropTypes.number,
    build: PropTypes.number,
  }),
  uid: PropTypes.string,
  isAnonymous: PropTypes.bool,
};
DevInfo.defaultProps = {};

export default DevInfo;
