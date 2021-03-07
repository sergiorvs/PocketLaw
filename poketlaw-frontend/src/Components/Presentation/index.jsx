import React from 'react';
import { useStyles } from './styles';
import { Grid, Typography, } from '@material-ui/core';
import { ReactComponent as LOGO } from '../../media/logo.svg';
import routesDictionary from '../../routes/routesDict';
import { useHistory } from 'react-router-dom';


const propTypes = {};

function Presentation() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid
      item
      sm={8}
      md={6}
      container
      alignContent={'center'} justify={'center'}
    >
      <Grid item className={classes.logoContainer}>
        <LOGO onClick={() => history.push(routesDictionary.dashboard)} />
      </Grid>
      <Grid item>
        <Typography align={'center'} variant={'subtitle2'} className={classes.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore
          et dolore magna aliquyam
        </Typography>
      </Grid>
    </Grid>
  );
}

Presentation.propTypes = propTypes;

export default Presentation;
