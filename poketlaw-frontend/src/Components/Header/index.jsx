import { Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Logo } from '../Logo';
import TranslationSelector from '../TranslationSelector';

export function Header() {
  const classes = useStyles();

  return (
    <Grid
      container item
      alignItems={'center'}
      justify={'space-between'}
      className={classes.headerContainer}
    >
      <Grid item container xs={1} justify={'center'}>
        <TranslationSelector />
      </Grid>
      <Grid item container justify={'flex-end'} alignItems={'center'} md={4}>
        <Grid item className={classes.logoContainer}>
          <Logo />
        </Grid>
      </Grid>
    </Grid>);
}
