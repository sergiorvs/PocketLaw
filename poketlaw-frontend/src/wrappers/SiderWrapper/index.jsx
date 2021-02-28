import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Divider, Grid, Typography, } from '@material-ui/core';

import Sider from '../../Components/Sider';
import LOGO from '../../media/logo.png';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import routesDictionary from '../../routes/routesDict';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';


const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  setLoginState: PropTypes.func.isRequired,
};

export default function SiderWrapper({children, setLoginState}) {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setLoginState(false);
    history.push(routesDictionary.login);
  };

  return (
    <Grid container className={classes.wrapperContent}>
      <Header />
      <Grid item xs={2} className={classes.siderBackground}>
        <Grid
          item
          container
          alignContent={'center'}
          justify={'center'}
        >
          <Grid item container className={classes.siderHeader}>
            <Grid item xs={12} className={classes.logoContainer}>
              <Avatar alt="Remy Sharp" src={LOGO} className={classes.avatar} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'h6'} align={'center'}>
                Maria Flores
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align={'center'}>
                prueba@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" className={classes.divider} />
          <Sider />
        </Grid>
        <Divider orientation="horizontal" className={classes.divider} />
        <Grid item xs={12} className={classes.logoutContainer}>
          <Typography align={'center'} onClick={logout} className={classes.logout}>
            Logout
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={10} className={classes.content}>
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
}
