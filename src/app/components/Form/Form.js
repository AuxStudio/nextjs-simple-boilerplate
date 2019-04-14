import React from 'react';
import PropTypes from 'prop-types';
import { TextField, MenuItem } from '@material-ui/core';

import styles from './styles';

import Typography from '../Typography';
import PrimaryButton from '../PrimaryButton';

const Form = ({ fields, footerText, submitButtonText, disabled, handleChange, handleSubmit }) => {
  const footerTextComponent = footerText && (
    <div className="footer-text-container">
      <Typography type="small" center>
        {footerText}
      </Typography>

      <style jsx>{styles}</style>
    </div>
  );

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
          select,
          options,
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
              select={select}
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

      {footerTextComponent}

      <PrimaryButton type="submit" disabled={disabled}>
        {submitButtonText}
      </PrimaryButton>

      <style jsx>{styles}</style>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'date', 'tel', 'file']),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      required: PropTypes.bool,
      validator: PropTypes.func,
      helperText: PropTypes.string,
      hasError: PropTypes.bool,
      errorMessage: PropTypes.string, // FIXME: Required if validator is supplied
      select: PropTypes.bool,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string,
          label: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  footerText: PropTypes.string,
  submitButtonText: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
Form.defaultProps = {
  submitButtonText: 'Submit',
};

export default Form;
