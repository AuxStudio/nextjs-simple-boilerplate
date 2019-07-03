import React from 'react';
import { storiesOf } from '@storybook/react';

import fields from './fields';
import styles from './styles';

import Form from '../Form';
import Typography from '../../Typography';

storiesOf('Components|Form', module)
  .add('default', () => (
    <Form
      fields={fields}
      footerComponent={
        <div style={styles.forgotPasswordTextContainer}>
          <Typography type="link">Forgot your password?</Typography>
        </div>
      }
      submitButtonText="LOG IN"
    >
      <div style={styles.signUpTextContainer}>
        <Typography type="paragraph" style={styles.signUpText}>
          Don&apos;t have an account yet?
          <Typography type="link" style={styles.signUpLinkText}>
            Sign up
          </Typography>
        </Typography>
      </div>
    </Form>
  ))
  .add('with Secondary Button', () => (
    <Form
      fields={fields}
      submitButtonText="LOG IN"
      secondaryButton={{
        text: 'CANCEL',
        handleClick: null,
      }}
      center
    />
  ));
