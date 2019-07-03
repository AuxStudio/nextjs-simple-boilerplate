import React from 'react';
import { storiesOf } from '@storybook/react';

import Typography from '..';
import styles from './styles';

storiesOf('Components|Typography', module)
  .add('default', () => (
    <div style={styles.container}>
      <Typography type="title" gutterBottom>
        TitleText
      </Typography>

      <Typography type="heading" gutterBottom>
        Heading Text
      </Typography>

      <Typography type="paragraph" gutterBottom>
        Paragraph Text
      </Typography>

      <Typography type="small" gutterBottom>
        Small Text
      </Typography>

      <Typography type="link" gutterBottom>
        Link Text
      </Typography>
    </div>
  ))
  .add('with white text', () => (
    <div style={{ ...styles.container, ...styles.background }}>
      <Typography type="title" center color="white" gutterBottom>
        TitleText
      </Typography>

      <Typography type="heading" color="white" gutterBottom>
        Heading Text
      </Typography>

      <Typography type="paragraph" color="white" gutterBottom>
        Paragraph Text
      </Typography>

      <Typography type="small" color="white" gutterBottom>
        Small Text
      </Typography>

      <Typography type="link" color="white" gutterBottom>
        Link Text
      </Typography>
    </div>
  ))
  .add('with bold text', () => (
    <div style={styles.container}>
      <Typography type="title" center bold gutterBottom>
        TitleText
      </Typography>

      <Typography type="heading" bold gutterBottom>
        Heading Text
      </Typography>

      <Typography type="paragraph" bold gutterBottom>
        Paragraph Text
      </Typography>

      <Typography type="small" bold gutterBottom>
        Small Text
      </Typography>

      <Typography type="link" bold gutterBottom>
        Link Text
      </Typography>
    </div>
  ))
  .add('with centered text', () => (
    <div style={styles.container}>
      <Typography type="title" center gutterBottom>
        TitleText
      </Typography>

      <Typography type="heading" center gutterBottom>
        Heading Text
      </Typography>

      <Typography type="paragraph" center gutterBottom>
        Paragraph Text
      </Typography>

      <Typography type="small" center gutterBottom>
        Small Text
      </Typography>

      <Typography type="link" center gutterBottom>
        Link Text
      </Typography>
    </div>
  ))
  .add('with custom style', () => (
    <div style={styles.container}>
      <Typography type="title" center style={{ color: 'red' }} gutterBottom>
        TitleText
      </Typography>

      <Typography type="heading" style={{ color: 'red' }} gutterBottom>
        Heading Text
      </Typography>

      <Typography type="paragraph" style={{ color: 'red' }} gutterBottom>
        Paragraph Text
      </Typography>

      <Typography type="small" style={{ color: 'red' }} gutterBottom>
        Small Text
      </Typography>

      <Typography type="link" style={{ color: 'red' }} gutterBottom>
        Link Text
      </Typography>
    </div>
  ));
