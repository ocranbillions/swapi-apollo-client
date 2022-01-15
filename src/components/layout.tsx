import React from 'react'
import { createUseStyles } from 'react-jss';

import { CustomThemeI } from '../@types';

const useStyles = createUseStyles((theme: CustomThemeI) => ({
  pageLayout: {
    background: theme.colors.black,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    '& *': {
      color: theme.colors.white
    }
  },
}));

const Layout = (props: { children: React.ReactChild }) => {
  const s = useStyles();

  return (
    <div className={s.pageLayout}>
      <div>Header</div>
      {props.children}
    </div>
  )
}

export default Layout;
