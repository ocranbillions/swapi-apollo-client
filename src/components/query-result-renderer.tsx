import React from 'react';
import { createUseStyles } from 'react-jss';

import { QueryResultPropsI } from '../@types';
import Spinner from './spinner';

const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center'
  },
}));

const QueryResultRenderer = (props: QueryResultPropsI): JSX.Element => {
  const s = useStyles();

  const { loading, error, data, children } = props;

  if (error) {
    return (
    <div className={s.container}>
      <p>ERROR:{error.message}</p>
    </div>
    )
  }

  if (loading) {
    return (
      <div className={s.container}>
        <Spinner />
      </div>
    );
  }

  if (!data) {
    return <p>Nothing to show...</p>;
  }

  return <div>{children}</div>;
};

export default QueryResultRenderer;
