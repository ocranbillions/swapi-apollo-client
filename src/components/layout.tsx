import React from 'react'
import { createUseStyles } from 'react-jss';

import { CustomThemeI } from '../@types';

const useStyles = createUseStyles((theme: CustomThemeI) => ({
  pageLayout: {
    background: theme.colors.black,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 50,
    '& *': {
      color: theme.colors.white
    }
  },
  content: {
    width: 768,
    padding: '0px 20px',
  },
  header: {
    textAlign: 'center',
    '& *': {
      color: theme.colors.yellow,
    }
  },
  title: {
    fontSize: 48,
    marginBottom: 0,
  },
  subTitle: {
    fontSize: 24,
    marginTop: 0,
  },
  '@media only screen and (max-width: 768px)': {
    content: {
      width: '100%'
    }
  }
}));

const Layout = (props: { children: React.ReactChild }) => {
  const s = useStyles();

  return (
    <div className={s.pageLayout}>
      <div className={s.content}>
        <div className={s.header}>
          <h2 className={s.title}>SWAPI</h2>
          <h4 className={s.subTitle}>The Starwars Players</h4>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
