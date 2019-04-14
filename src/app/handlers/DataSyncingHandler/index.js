import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class DataSyncingHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleSyncData = this.handleSyncData.bind(this);
    this.syncData = this.syncData.bind(this);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    this.handleSyncData();
  }

  handleSyncData() {
    // this.syncData();
  }

  syncData() {
    const { dispatch } = this.props;

    dispatch({
      type: 'sync',
      meta: {
        url: 'TODO',
        nextActions: [
          {
            type: 'TODO',
          },
        ],
      },
    });
  }

  render() {
    return null;
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DataSyncingHandler);
