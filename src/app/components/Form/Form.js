import React from 'react';
import PropTypes from 'prop-types';
import { TextField, MenuItem } from '@material-ui/core';

import styles from './styles';

import PrimaryButton from '../PrimaryButton';

const Form = ({
  fields,
  footerComponent,
  children,
  submitButtonText,
  disabled,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="container">
      {fields.map((field) => {
        const {
          name,
          type,
          value,
          label,
          required,
          hasError,
          errorMessage,
          options,
          placeholder,
          autoFocus,
          min,
          max,
          pattern,
        } = field;

        return (
          <div key={name} className="input-container">
            <TextField
              name={name}
              type={type}
              value={value}
              label={label}
              required={required}
              onChange={handleChange}
              fullWidth
              helperText={hasError && errorMessage}
              error={hasError}
              select={type === 'select'}
              placeholder={placeholder}
              autoFocus={autoFocus}
              inputProps={{
                min,
                max,
                pattern,
              }}
              variant="outlined"
            >
              {options &&
                options.map((option) => {
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  );
                })}
            </TextField>
          </div>
        );
      })}

      {footerComponent}

      <PrimaryButton type="submit" disabled={disabled}>
        {submitButtonText}
      </PrimaryButton>

      {children}

      <style jsx>{styles}</style>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.oneOf([
        'text',
        'number',
        'email',
        'password',
        'date',
        'tel',
        'file',
        'select',
      ]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      required: PropTypes.bool,
      validator: PropTypes.func,
      helperText: PropTypes.string,
      hasError: PropTypes.bool,
      errorMessage: PropTypes.string, // FIXME: Required if validator is supplied
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string,
          label: PropTypes.string,
        }),
      ),
      placeholder: PropTypes.string,
      autoFocus: PropTypes.bool,
      min: PropTypes.string,
      max: PropTypes.string,
      pattern: PropTypes.string,
    }),
  ).isRequired,
  footerComponent: PropTypes.node,
  children: PropTypes.node,
  submitButtonText: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
Form.defaultProps = {
  submitButtonText: 'Submit',
};

export default Form;
