import React from 'react'
import { createUseStyles } from 'react-jss';
import { Link } from "react-router-dom";

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
    width: 960,
    marginTop: 10,
  },
  header: {
    textAlign: 'center',
    textDecoration: 'none',
    '& *': {
      color: theme.colors.yellow,
    }
  },
  title: {
    marginTop: 5,
    fontSize: 38,
    marginBottom: 0,
  },
  subTitle: {
    fontSize: 20,
    marginTop: 0,
    marginBottom: 10,
  },
  '@media only screen and (max-width: 960px)': {
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
        <Link to='/' className={s.header}>
          <h2 className={s.title}>SWAPI</h2>
          <h4 className={s.subTitle}>The Starwars Characters</h4>
        </Link>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
