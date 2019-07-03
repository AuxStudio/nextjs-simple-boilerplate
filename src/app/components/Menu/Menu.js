import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from '@material-ui/core';

import muiStyles from './muiStyles';
import styles from './styles';

import IconButton from '../IconButton';
import Typography from '../Typography';

const MenuComponent = ({ items, anchorElId, isOpen, handleMenuButtonClick, handleClose }) => {
  const anchorEl = document.getElementById(anchorElId);

  return (
    <div className="menu-button-container">
      <div id={anchorElId}>
        <IconButton iconName="menu" tooltip="Toggle menu" handleClick={handleMenuButtonClick} />
      </div>

      <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
        {items.map((item) => {
          return (
            <MenuItem
              key={item.name}
              disabled={item.disabled}
              onClick={() => {
                item.handleClick();
                handleClose();
              }}
              style={muiStyles.menuItem}
            >
              <Typography type="paragraph">{item.name}</Typography>
            </MenuItem>
          );
        })}
      </Menu>

      <style jsx>{styles}</style>
    </div>
  );
};

MenuComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      disabled: PropTypes.bool,
      handleClick: PropTypes.func.isRequired,
    }),
  ),
  anchorElId: PropTypes.string,
  isOpen: PropTypes.bool,
  handleMenuButtonClick: PropTypes.func,
  handleClose: PropTypes.func.isRequired,
};
MenuComponent.defaultProps = {
  anchorElId: 'menu',
};

export default MenuComponent;
