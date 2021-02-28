import { Button, Grid, Typography } from '@material-ui/core';
import routesDictionary from '../../routes/routesDict';
import LOGO from '../../media/logo.png';
import React from 'react';
import { useStyles } from './styles';
import { Logo } from '../Logo';

export function Footer() {
  const classes = useStyles();

  return (
    <Grid
      container item
      alignItems={"center"}
      className={classes.footerContainer}
    >
      <Grid item container justify={"center"} alignItems={"center"}>
        <Grid item className={classes.logoContainer}>
          <Logo />
        </Grid>
      </Grid>
    </Grid>)
}
