import React from 'react';

import styles from './styles';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

const Error = () => {
  return (
    <Layout>
      <div className="container">
        <Typography type="title" center gutterBottom>
          Houston, we have a problem.
        </Typography>

        <Typography type="paragraph" center>
          The page you&apos;re searching for doesn&apos;t exist. It has either been moved or the
          link is broken.
        </Typography>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Error.propTypes = {};
Error.defaultProps = {};

export default Error;
