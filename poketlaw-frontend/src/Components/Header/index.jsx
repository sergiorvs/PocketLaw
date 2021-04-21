import { Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Logo } from '../Logo';
import TranslationSelector from '../TranslationSelector';
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

export function Header({setOpenDrawer}) {
  const classes = useStyles();

  return (
    <Grid
      container item
      alignItems={'center'}
      justify={'space-between'}
      className={classes.headerContainer}
    >
      <Grid item xs={6} container alignItems={"center"}>
        <Grid item xs={1} container className={classes.menu}>
          <MenuOpenIcon className={classes.menu} onClick={()=>setOpenDrawer(true)}/>
        </Grid>
        <Grid item xs={11} container>
          <TranslationSelector />
        </Grid>
      </Grid>
      <Grid item container justify={'flex-end'} alignItems={'center'} xs={4}>
        <Grid item className={classes.logoContainer}>
          <Logo />
        </Grid>
      </Grid>
    </Grid>);
}
