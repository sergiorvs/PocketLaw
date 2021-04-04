import React from 'react';
import { useStyles } from './styles';
import { Grid, Paper, } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo';


const propTypes = {};

function Presentation({children}) {
  const classes = useStyles();
  const history = useHistory();
  const {t} = useTranslation();

  return (
    <Grid container justify={'center'} alignContent={'center'} className={classes.baseContainer}>
      <Grid item container justify={'center'} alignContent={'center'} className={classes.h100}>
        <Grid
          item
          container
          md={6}
          sm={12}
          justify={'center'}
          alignContent={'center'}
          className={classes.loginContainer}
        >
          <Grid item sm={10} md={6}>
            <div className={classes.logo}>
              <Logo />
            </div>
            <Paper elevation={2} className={classes.paper}>
              {children}
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md={6}
          sm={0}
          justify={'flex-end'}
          alignContent={'center'}
          className={classes.presentationContainer}>
          <Grid item xs={12} />
        </Grid>
      </Grid>
    </Grid>
  );
}

Presentation.propTypes = propTypes;

export default Presentation;
