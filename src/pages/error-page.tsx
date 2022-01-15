import React from 'react';
import Layout from '../components/layout';

const ErrorPage = (props: any) => {
  const { error } = props;

  return (
    <Layout>
      <div>{error.message}</div>
    </Layout>
  );
};

export default ErrorPage;