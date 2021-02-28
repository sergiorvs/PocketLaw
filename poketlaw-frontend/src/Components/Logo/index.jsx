import React from 'react';
import { useStyles } from './styles';
import { ReactComponent as LOGO } from '../../media/1.svg';

export function Logo() {
  const classes = useStyles();

  return (
    <LOGO className={classes.logo} />
  );
}
