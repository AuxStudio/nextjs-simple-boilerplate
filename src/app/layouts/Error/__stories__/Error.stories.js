import React from 'react';
import { storiesOf } from '@storybook/react';

import Error from '..';

storiesOf('Layouts|Error', module)
  .add('default', () => <Error />)
  .add('custom', () => <Error errorMessage="Insufficient permissions." />);
