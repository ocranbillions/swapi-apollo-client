import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomThemeI } from '../@types';

const useStyles = createUseStyles((theme: CustomThemeI) => ({
  btn: {
    display: 'block',
    margin: 'auto',
    background: theme.colors.darkBlack,
    border: 'none',
    padding: '5px 10px',
    borderRadius: 5,
    '&:hover': {
      cursor: 'pointer',
      background: theme.colors.lightBlack,
    }
  }
}));

const Button = (props: any) => {
  const s = useStyles();

  return (
    <button className={s.btn} onClick={props.onClick}>{props.btnText}</button>
  )
}

export default Button;