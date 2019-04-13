import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { version } from '../../config';

import DevInfo from './DevInfo';

const DevInfoContainer = ({ uid, isAnonymous }) => {
  const env = process.env.REACT_APP_ENV || 'dev';
  const isProduction = env === 'prod';

  if (isProduction) {
    return null;
  }

  return <DevInfo env={env} version={version} uid={uid} isAnonymous={isAnonymous} />;
};

DevInfoContainer.propTypes = {
  uid: PropTypes.string,
  isAnonymous: PropTypes.bool,
};
DevInfoContainer.defaultProps = {};

const mapStateToProps = (state) => {
  const { uid, isAnonymous } = state.user;

  return {
    uid,
    isAnonymous,
  };
};

export default connect(mapStateToProps)(DevInfoContainer);
