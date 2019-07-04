import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { diff } from 'deep-diff';

export default (ComposedComponent) => {
  class withSyncData extends React.Component {
    constructor(props) {
      super(props);

      this.onSyncData = this.onSyncData.bind(this);
      this.setIsSyncing = this.setIsSyncing.bind(this);
      this.syncData = this.syncData.bind(this);
      this.addSyncedTransaction = this.addSyncedTransaction.bind(this);

      this.state = {};
    }

    static propTypes = {
      /*
       * Store
       */
      dispatch: PropTypes.func,
      hasPendingTransactions: PropTypes.bool,
      hasError: PropTypes.bool,
      isSyncing: PropTypes.bool,
      syncedTransactions: PropTypes.arrayOf(PropTypes.shape({})),
    };

    static defaultProps = {};

    componentDidUpdate(prevProps) {
      /*
       * If we had pendingTransactions and we don't and didn't have an error
       */
      const { hasPendingTransactions, hasError, isSyncing } = this.props;

      /*
       * If we are loading and have no more pending transactions, toggle loading back to false
       */
      if (isSyncing && !hasPendingTransactions && prevProps.hasPendingTransactions) {
        this.setIsSyncing(false);
      }

      /*
       * If we are loading and had an error, toggle loading back to false
       */
      if (isSyncing && hasError && !prevProps.hasError) {
        this.setIsSyncing(false);
      }
    }

    onSyncData(transaction) {
      /*
       * If we have not already synced on this event
       * Sync it
       */
      const { syncedTransactions } = this.props;
      const hasSyncedOnTransaction = syncedTransactions.filter(
        (item) => !diff(item, transaction),
      )[0]
        ? true
        : false;

      if (transaction.isUnique || !hasSyncedOnTransaction) {
        const { isSyncing } = this.props;

        if (!isSyncing) {
          this.setIsSyncing(true);
        }

        this.addSyncedTransaction(transaction);
        this.syncData(transaction);
      }
    }

    setIsSyncing(isSyncing) {
      const { dispatch } = this.props;

      dispatch({
        type: 'SET_IS_SYNCING',
        payload: {
          isSyncing,
        },
      });
    }

    syncData({ url, queries, nextActions }) {
      const { dispatch } = this.props;

      dispatch({
        type: 'sync',
        payload: {
          url,
          queries,
        },
        meta: {
          nextActions,
        },
      });
    }

    addSyncedTransaction(event) {
      const { dispatch } = this.props;

      dispatch({
        type: 'ADD_SYNCED_TRANSACTION',
        payload: {
          event,
        },
      });
    }

    render() {
      const { isSyncing } = this.props;

      return <ComposedComponent isSyncing={isSyncing} syncData={this.onSyncData} {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    const { appState } = state;

    /*
     * Get the pending transactions that are sync/fetch actions
     */
    const hasPendingTransactions = appState.pendingTransactions.filter(
      (item) => item.action.type === 'sync',
    ).length
      ? true
      : false;
    const hasError = appState.systemMessage.variant === 'error' ? true : false;
    const { isSyncing, syncedTransactions } = appState;

    return { hasPendingTransactions, hasError, isSyncing, syncedTransactions };
  }

  return connect(mapStateToProps)(withSyncData);
};
