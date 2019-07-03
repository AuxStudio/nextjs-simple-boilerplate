import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from '..';

const selectedOptionIndex = 0;
const options = [
  {
    name: "Shaun Saker's team",
  },
  {
    name: "Astrid Saker's team",
  },
  {
    name: "Isla Saker's team",
  },
];

storiesOf('Components|Select', module).add('default', () => (
  <Select selectedOptionIndex={selectedOptionIndex} options={options} />
));
