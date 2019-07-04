import React from 'react';
import { storiesOf } from '@storybook/react';

import Menu from '..';

const items = [
  { name: 'Profile', handleClick: console.log },
  { name: 'Sign Out', handleClick: console.log },
];

storiesOf('Components|Menu', module).add('default', () => <Menu items={items} />);
