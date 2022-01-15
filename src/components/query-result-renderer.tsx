import React from 'react';
import { createUseStyles } from 'react-jss';

import { QueryResultPropsI } from '../@types';

const useStyles = createUseStyles(() => ({
  spinnerContainer: {

  },
}));

const QueryResultRenderer = (props: QueryResultPropsI): JSX.Element => {
  const s = useStyles();

  const { loading, error, data, children } = props;

  if (error) {
    return <p>ERROR:{error.message}</p>
  }

  if (loading) {
    return (
      <div className={s.spinnerContainer}>
        Loading...
      </div>
    );
  }

  if (!data) {
    return <p>Nothing to show...</p>;
  }

  return <div>{children}</div>;
};

export default QueryResultRenderer;
