import React from 'react'
import { createUseStyles } from 'react-jss';

import { CustomThemeI } from '../interface/theme-interface';

const useStyles = createUseStyles((theme: CustomThemeI) => ({
  pageLayout: {
    background: theme.colors.black,
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
