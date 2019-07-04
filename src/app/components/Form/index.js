import React from 'react';
import PropTypes from 'prop-types';

import { cloneObject } from 'js-simple-utils';

import Form from './Form';

export class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
    this.setValues = this.setValues.bind(this);
    this.setFieldIndicesWithErrors = this.setFieldIndicesWithErrors.bind(this);

    this.state = {
      fieldIndicesWithErrors: [],
      values: {}, // any select input values will be stored here (MUI does not manage that internally)
    };
  }

  static propTypes = {
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
        validator: PropTypes.func,
      }),
    ).isRequired,
    footerComponent: PropTypes.node,
    children: PropTypes.node,
    submitButtonText: PropTypes.string,
    disabled: PropTypes.bool,
    secondaryButton: PropTypes.shape({}),
    center: PropTypes.bool,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  static defaultProps = {
    submitButtonText: 'SUBMIT',
  };

  onChange(event) {
    const { fields, handleChange } = this.props;
    const input = event.target;
    const { name, value } = input;
    const inputValue = this.getInputValue(input);
    const field = fields.filter((item) => item.name === name)[0];
    const { type } = field;

    if (type === 'select') {
      const { values } = this.state;
      values[name] = value;

      this.setValues(values);
    }

    if (handleChange) {
      handleChange(name, inputValue);
    }
  }

  onSubmit(event) {
    const { fieldIndicesWithErrors } = this.state;
    const { fields, handleSubmit } = this.props;
    const values = {};
    const newFieldIndicesWithErrors = [];

    // Prevent default submit behaviour
    event.preventDefault();

    // If there were fields with errors, reset them
    if (fieldIndicesWithErrors.length) {
      this.setFieldIndicesWithErrors(newFieldIndicesWithErrors);
    }

    // Grab the relevant fields from event.target
    fields.forEach((field, index) => {
      const { name, validator } = field;
      const input = event.target[name];
      const inputValue = this.getInputValue(input);

      /*
       * If validator function was supplied
       * Check if the input value is valid
       * Set formIsValid appropriately so that we know if we should submit or not
       */
      if (validator) {
        const isValid = validator(inputValue);

        if (!isValid) {
          newFieldIndicesWithErrors.push(index); // NOTE: Assumes that this field in state is reset
        }
      }

      // Attach the input value to the values object
      values[name] = inputValue;
    });

    this.setFieldIndicesWithErrors(newFieldIndicesWithErrors);

    /*
     * Allow the submit if there were no errors
     */
    if (handleSubmit && !newFieldIndicesWithErrors.length) {
      handleSubmit(values);
    }
  }

  getInputValue(input) {
    /*
     * An input might be of number type
     * or of checkbox type
     * Grab the appropriate value
     */
    const { value, type, checked } = input;

    if (type === 'number') {
      return Number(value);
    }

    if (type === 'checkbox') {
      return checked;
    }

    return value;
  }

  setValues(values) {
    this.setState({
      values,
    });
  }

  setFieldIndicesWithErrors(fieldIndicesWithErrors) {
    this.setState({
      fieldIndicesWithErrors,
    });
  }

  render() {
    const { fieldIndicesWithErrors, values } = this.state;
    const {
      fields,
      footerComponent,
      children,
      submitButtonText,
      disabled,
      secondaryButton,
      center,
    } = this.props;
    let newFields = cloneObject(fields); // clone the object so that we don't mutate fields (will cause Form not to update)

    /*
     * Attach errors and/or values in state
     */
    newFields = newFields
      ? newFields.map((field, index) => {
          const newField = field;
          const { name } = field;
          const value = values[name];

          /*
           * If there is a value in state (used with select inputs)
           * set it to the field
           */
          if (value) {
            newField.value = value;
          }

          /*
           * If there is an error in state
           * set it to the field
           */
          if (fieldIndicesWithErrors.includes(index)) {
            newField.hasError = true;
          }

          return newField;
        })
      : [];

    return (
      <Form
        fields={newFields}
        footerComponent={footerComponent}
        submitButtonText={submitButtonText}
        disabled={disabled}
        secondaryButton={secondaryButton}
        center={center}
        handleChange={this.onChange}
        handleSubmit={this.onSubmit}
      >
        {children}
      </Form>
    );
  }
}

export default FormContainer;
