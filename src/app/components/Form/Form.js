import React, { memo } from 'react';
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
  secondaryButton,
  center,
  handleChange,
  handleSubmit,
}) => {
  const secondaryButtonComponent = secondaryButton && (
    <div className="secondary-button-container">
      <PrimaryButton
        secondary
        disabled={secondaryButton.disabled}
        handleClick={secondaryButton.handleClick}
      >
        {secondaryButton.text}
      </PrimaryButton>

      <style jsx>{styles}</style>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className={`container ${center ? 'center' : ''}`}>
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
          multiline,
          variant,
        } = field;

        return (
          <div key={name} className="input-container">
            <TextField
              name={name}
              type={type}
              multiline={multiline}
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
              variant={variant}
              InputLabelProps={{ shrink: type === 'date' ? true : undefined }}
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

      <div className="buttons-container">
        <PrimaryButton type="submit" disabled={disabled}>
          {submitButtonText}
        </PrimaryButton>

        {secondaryButtonComponent}
      </div>

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
      multiline: PropTypes.bool,
    }),
  ).isRequired,
  footerComponent: PropTypes.node,
  children: PropTypes.node,
  submitButtonText: PropTypes.string,
  disabled: PropTypes.bool,
  secondaryButton: PropTypes.shape({
    text: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
  }),
  center: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
Form.defaultProps = {};

export default memo(Form);
