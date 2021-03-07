import { Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Logo } from '../Logo';

export function Header() {
  const classes = useStyles();

  return (
    <Grid
      container item
      alignItems={'center'}
      justify={'flex-end'}
      className={classes.headerContainer}
    >
      <Grid item container justify={'flex-end'} alignItems={'center'} md={4}>
        <Grid item className={classes.logoContainer}>
          <Logo />
        </Grid>
      </Grid>
    </Grid>);
}
