import React from 'react';
import { useStyles } from './styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import {ReactComponent as LOGO} from '../../media/1.svg'


const propTypes = {
};

function Presentation() {
  const classes = useStyles();

  return (
      <Grid
        item
        sm={8}
        md={6}
        container
        alignContent={"center"} justify={"center"}
      >
        <Grid item className={classes.logoContainer}>
          <LOGO />
        </Grid>
        <Grid item>
          <Typography align={"center"} variant={"subtitle2"} className={classes.description}>
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
