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
      <Grid item container className={classes.menuContainer}>
        <MenuOpenIcon className={classes.menu} onClick={()=>setOpenDrawer(true)}/>
      </Grid>
      <Grid item md={6} xs={2} container alignItems={"center"} className={classes.translateContainer}>
        <Grid item sm={11} container>
          <TranslationSelector />
        </Grid>
      </Grid>
      <Grid item container justify={'flex-end'} alignItems={'center'} md={4} xs={8}>
        <Grid item className={classes.logoContainer}>
          <Logo />
        </Grid>
      </Grid>
    </Grid>);
}
