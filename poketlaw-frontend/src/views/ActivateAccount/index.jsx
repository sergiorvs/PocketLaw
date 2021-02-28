import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Divider, Grid, Typography } from '@material-ui/core';

import { useStyles } from '../Login/styles';
import routesDictionary from '../../routes/routesDict';
import Presentation from '../../Components/Presentation';


function ActivateAccount() {
  const classes = useStyles();
  const history = useHistory();
  const [message, setMessage] = useState('');

  const {uid, token} = useParams();
  const input = {
    uid,
    token,
  };

  // useEffect(()=> {
  //
  // }, [message])

  return (
    <Grid container justify={'center'} alignContent={'center'} className={classes.baseContainer}>
      <Grid
        item
        container
        sm={5}
        xs={12}
        justify={'flex-end'}
        alignContent={'center'}
        className={classes.presentationContainer}
      >
        <Presentation />
      </Grid>
      <Grid item sm={1} md={2} container justify={'center'}>
        <Divider orientation="vertical" className={classes.divider} />
      </Grid>
      <Grid
        item
        container
        sm={5}
        justify={'flex-start'}
        alignContent={'center'}
        className={classes.resetPasswordContainer}
      >
        <Grid item sm={10} md={7}>
          <Typography color={'primary'} align={'center'} variant={'h3'} className={classes.marginBottom}>
            Activate Cuenta
          </Typography>
          <Typography color={'primary'} align={'center'} variant={'h3'} className={classes.marginBottom}>
            {message}
          </Typography>
          <Grid item container spacing={2} xs={12}>
            <Grid item md={6} xs={12}>
              <Button variant={'contained'} className={classes.button}
                      onClick={() => history.push(routesDictionary.login)}>
                Inicia Sesión
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <Button variant={'contained'} className={classes.button}
                      onClick={() => history.push(routesDictionary.register)}>
                Regístrate
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ActivateAccount;
