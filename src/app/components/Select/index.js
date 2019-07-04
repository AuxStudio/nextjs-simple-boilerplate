import React from 'react';
import PropTypes from 'prop-types';
import { TextField, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

import Typography from '../Typography';

const muiStyles = {
  input: {
    height: 42,
  },
};

const SelectComponent = ({ classes, selectedOptionIndex, options, handleChange }) => {
  return (
    <div className="container">
      <TextField
        value={selectedOptionIndex}
        onChange={handleChange}
        select
        variant="outlined"
        margin="none"
        InputProps={{
          classes: { root: classes.input },
        }}
      >
        {options.map((item, index) => {
          return (
            <MenuItem key={item.name} value={index}>
              <Typography type="paragraph">{item.name}</Typography>
            </MenuItem>
          );
        })}
      </TextField>

      <style jsx>{styles}</style>
    </div>
  );
};

SelectComponent.propTypes = {
  classes: PropTypes.shape({}),
  selectedOptionIndex: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
  handleChange: PropTypes.func,
};
SelectComponent.defaultProps = {};

export default withStyles(muiStyles)(SelectComponent);
