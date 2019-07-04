import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

const Error = ({ errorMessage }) => {
  return (
    <Layout>
      <div className="container">
        <Typography type="title" center gutterBottom>
          Houston, we have a problem.
        </Typography>

        <Typography type="paragraph" center>
          {errorMessage}
        </Typography>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
};
Error.defaultProps = {
  errorMessage: "The page you're searching for doesn't exist. It has either been moved or the link is broken.",
};

export default Error;
