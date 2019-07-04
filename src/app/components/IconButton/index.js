import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@material-ui/core';

import Icon from '../Icon';

const IconButtonComponent = ({ iconName, tooltip, color, id, handleClick }) => {
  return (
    <Tooltip title={tooltip}>
      <IconButton id={id} onClick={handleClick} style={{ color }}>
        <Icon name={iconName} />
      </IconButton>
    </Tooltip>
  );
};

IconButtonComponent.propTypes = {
  iconName: PropTypes.string,
  tooltip: PropTypes.string.isRequired,
  color: PropTypes.string,
  id: PropTypes.string,
  handleClick: PropTypes.func,
};
IconButtonComponent.defaultProps = {};

export default IconButtonComponent;
