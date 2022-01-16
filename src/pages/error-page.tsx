import React from 'react';
import { createUseStyles } from 'react-jss';

import Layout from '../components/layout';

const useStyles = createUseStyles(() => ({
  errorMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: 22
  },
}));

const ErrorPage = (props: { error: Error }) => {
  const s = useStyles();
  const { error } = props;

  return (
    <Layout>
      <div className={s.errorMessage}>{error.message}</div>
    </Layout>
  );
};

export default ErrorPage;