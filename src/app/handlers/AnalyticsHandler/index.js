import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import { analytics } from '../../config';

const { trackingID } = analytics;
const isDev = !process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === 'dev';

export class AnalyticsHandler extends React.Component {
  constructor(props) {
    super(props);

    this.initialiseGA = this.initialiseGA.bind(this);
    this.setUserID = this.setUserID.bind(this);
  }

  static get propTypes() {
    return {
      uid: PropTypes.string,
    };
  }

  componentDidMount() {
    const { uid } = this.props;

    this.initialiseGA();

    if (uid) {
      this.setUserID(uid);
    }
  }

  componentDidUpdate(prevProps) {
    const { uid } = this.props;

    if (uid && !prevProps.uid) {
      this.setUserID(uid);
    }
  }

  initialiseGA() {
    ReactGA.initialize(trackingID, { debug: isDev });
  }

  setUserID(uid) {
    ReactGA.set({ userId: uid });
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  const { user } = state;
  const { uid } = user;

  return {
    uid,
  };
}

export default connect(mapStateToProps)(AnalyticsHandler);
