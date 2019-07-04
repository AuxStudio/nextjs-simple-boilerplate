import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab } from '@material-ui/core';

import { colors } from '../../static/styles/styleConstants';

const TabBar = ({ currentTabIndex, tabs, handleClick }) => {
  return (
    <AppBar
      position="static"
      color="inherit"
      style={{ boxShadow: 'none', backgroundColor: colors.lightGrey }}
    >
      <Tabs
        value={currentTabIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, index) => handleClick(index)}
      >
        {tabs &&
          tabs.map((tab) => {
            const { name } = tab;

            return <Tab key={name} label={name} color="primary" />;
          })}
      </Tabs>
    </AppBar>
  );
};

TabBar.propTypes = {
  currentTabIndex: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  handleClick: PropTypes.func,
};
TabBar.defaultProps = {};

export default TabBar;
