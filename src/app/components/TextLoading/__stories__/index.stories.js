import React from 'react';
import { storiesOf } from '@storybook/react';

import TextLoading from '..';
import styles from './styles';

storiesOf('Components|TextLoading', module).add('default', () => (
  <div style={styles.container}>
    <h1>Some Text</h1>

    <TextLoading />
  </div>
));
