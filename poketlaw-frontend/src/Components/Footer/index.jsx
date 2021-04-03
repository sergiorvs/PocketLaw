import {Grid, Typography} from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Logo } from '../Logo';
import {useTranslation} from "react-i18next";

export function Footer() {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <Grid
      container item
      alignItems={'center'}
      className={classes.footerContainer}
    >
      <Grid item container justify={'center'} alignItems={'center'}>
        <Grid item className={classes.logoContainer}>
          <Logo />
        </Grid>
        <Grid item container justify={"center"} className={classes.politics} sm={12}>
          <Typography variant={"caption"} style={{borderBottom: '1px solid'}}>
            {t('privacy')}
          </Typography>
        </Grid>
      </Grid>
    </Grid>);
}
