import React from 'react';
import { storiesOf } from '@storybook/react';

import TabBar from '..';

const tabs = [
  {
    name: 'PROJECTS',
  },
  {
    name: 'TEAM',
  },
];

storiesOf('Components|TabBar', module).add('default', () => (
  <TabBar currentTabIndex={0} tabs={tabs} handleClick={null} />
));
