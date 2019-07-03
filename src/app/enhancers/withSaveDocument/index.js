import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
 * This enhancer controls how we create and edit documents
 * It also attaches meta data and passes back
 * isSaving, hasError and hasSuccess states
 */
export default (ComposedComponent) => {
  class withSaveDocument extends React.Component {
    constructor(props) {
      super(props);

      this.onSaveDocument = this.onSaveDocument.bind(this);
      this.setIsSaving = this.setIsSaving.bind(this);
      this.setHasError = this.setHasError.bind(this);
      this.setHasSuccess = this.setHasSuccess.bind(this);
      this.saveDocument = this.saveDocument.bind(this);

      this.state = {
        isSaving: false,
        hasError: false,
        hasSuccess: false,
      };
    }

    static propTypes = {
      /*
       * Store
       */
      dispatch: PropTypes.func,
      hasPendingTransactions: PropTypes.bool,
      hasStoreError: PropTypes.bool,
    };

    static defaultProps = {};

    componentDidUpdate(prevProps) {
      const { isSaving } = this.state;

      /*
       * If there is a store error while we are saving
       */
      const { hasStoreError } = this.props;

      if (isSaving && hasStoreError && !prevProps.hasStoreError) {
        this.setHasError(true);
        this.setIsSaving(false);
      }

      /*
       * If there are no more pending transactions while we are saving
       * and there is no internal error
       */
      const { hasError } = this.state;
      const { hasPendingTransactions } = this.props;

      if (isSaving && !hasPendingTransactions && prevProps.hasPendingTransactions && !hasError) {
        this.setHasSuccess(true);
        this.setIsSaving(false);
      }
    }

    onSaveDocument(args) {
      this.setIsSaving(true);
      this.setHasError(false);
      this.setHasSuccess(false);
      this.saveDocument(args);
    }

    setIsSaving(isSaving) {
      this.setState({
        isSaving,
      });
    }

    setHasError(hasError) {
      this.setState({
        hasError,
      });
    }

    setHasSuccess(hasSuccess) {
      this.setState({
        hasSuccess,
      });
    }

    saveDocument({ url, document, nextActions }) {
      const { dispatch } = this.props;
      const newDocument = {
        ...document,
      };

      dispatch({
        type: 'setDocument',
        payload: {
          url,
          document: newDocument,
        },
        meta: {
          nextActions,
        },
      });
    }

    render() {
      const { isSaving, hasError, hasSuccess } = this.state;

      return (
        <ComposedComponent
          isSaving={isSaving}
          hasError={hasError}
          hasSuccess={hasSuccess}
          saveDocument={this.onSaveDocument}
          {...this.props}
        />
      );
    }
  }

  function mapStateToProps(state) {
    const { appState } = state;
    const { pendingTransactions, systemMessage } = appState;
    const hasPendingTransactions = pendingTransactions.length ? true : false;
    const hasStoreError = systemMessage.variant === 'error' ? true : false;

    return { hasPendingTransactions, hasStoreError };
  }

  return connect(mapStateToProps)(withSaveDocument);
};
