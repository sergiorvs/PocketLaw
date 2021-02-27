import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Grid, Typography,
  withStyles,
} from '@material-ui/core';

import Sider from '../../Components/Sider';
import styles from './styles';
import LOGO from "../../media/logo.png";

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  setLoginState: PropTypes.func.isRequired,
};

class SiderWrapper extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    const { setLoginState } = this.props;
    localStorage.clear();
    setLoginState(false);
  }

  render() {
    const { classes, children } = this.props;

    return (
      <Grid container className={classes.wrapperContent}>
        <Grid item xs={2} className={classes.siderBackground}>
          <Grid
            item
            container
            alignContent={"center"}
            justify={"center"}
          >
            <Grid item container className={classes.siderHeader}>
            <Grid item xs={12} className={classes.logoContainer}>
              <img alt={"Logo"} src={LOGO} className={classes.logo}/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h6"} color={"primary"} align={"center"}>
                Mario Florez R.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color={"primary"} align={"center"}>
                Prueba@gmail.com
              </Typography>
            </Grid>
            </Grid>
            <Divider orientation="horizontal" className={classes.divider} />
            <Sider logout={this.logout} />
            {/*<Grid item container className={classes.siderHeader}>*/}
            {/*  <Grid item xs={12}>*/}
            {/*    <Typography align={"center"} className={classes.menuList}>*/}
            {/*      Agenda Semanal*/}
            {/*    </Typography>*/}
            {/*  </Grid>*/}
            {/*  <Grid item xs={12}>*/}
            {/*    <Typography align={"center"} className={classes.menuList}>*/}
            {/*      Agenda Semanal*/}
            {/*    </Typography>*/}
            {/*  </Grid>*/}
            {/*</Grid>*/}
          </Grid>
        </Grid>
        <Grid item xs={10} className={classes.content}>
          {children}
        </Grid>
      </Grid>
    );
  }
}

SiderWrapper.propTypes = propTypes;

export default withStyles(styles)(SiderWrapper);
