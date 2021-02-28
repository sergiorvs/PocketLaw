import { Button, Grid, Typography } from '@material-ui/core';
import routesDictionary from '../../routes/routesDict';
import React from 'react';
import { useStyles } from './styles';
import { Logo } from '../Logo';

export function Header() {
  const classes = useStyles();

  return (
    <Grid
    container item
    alignItems={"center"}
    className={classes.headerContainer}
  >
    <Grid item container justify={"flex-end"} alignItems={"center"} md={5}>
      <Grid item className={classes.logoContainer}>
        <Logo />
      </Grid>
    </Grid>
  </Grid>)
}
