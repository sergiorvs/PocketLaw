import {Grid, Typography} from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Logo } from '../Logo';
import {useTranslation} from "react-i18next";
import {useQuery} from "@apollo/client";
import {GET_PRIVACY_POLITICS} from "../../graphql/queries/Core";
import {BACKEND_URL} from "../../settings/constants";

export function Footer() {
  const classes = useStyles();
  const {t} = useTranslation();
  const {data} = useQuery(GET_PRIVACY_POLITICS)

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
          <a href={`${BACKEND_URL}${data?.privacyPolitics}`}>
            <Typography variant={"caption"} style={{borderBottom: '1px solid'}}>
              {t('privacy')}
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Grid>);
}
