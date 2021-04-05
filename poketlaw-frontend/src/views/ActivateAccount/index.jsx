import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

import { useStyles } from '../Login/styles';
import routesDictionary from '../../routes/routesDict';
import Presentation from '../../Components/Presentation';
import { useMutation } from '@apollo/client';
import { ACTIVATE_ACCOUNT } from '../../graphql/mutations/Users';
import { useTranslation } from 'react-i18next';


function ActivateAccount() {
  const classes = useStyles();
  const history = useHistory();
  const {t} = useTranslation();
  const [message, setMessage] = useState('');
  const [activateAccount] = useMutation(ACTIVATE_ACCOUNT);

  const {uid, token} = useParams();

  useEffect(() => {
    activateAccount({
      variables: {
        activateData: {
          uid,
          token
        }
      }
    }).then(({data}) => {
      const {message} = data.activateAccount;
      setMessage(message);
    });
  }, [uid, token, activateAccount]);

  return (
    <Presentation>
      <Grid
        item
        container
        sm={12}
        justify={'flex-start'}
        alignContent={'center'}
        className={classes.resetPasswordContainer}
      >
        <Grid item xs={12}>
          <Typography  align={'center'} variant={'h3'} className={classes.marginBottom}>
            {message.title}
          </Typography>
          <Typography align={'center'} variant={'body1'}
                                    className={classes.marginBottom}>
          {message.description}
        </Typography>
          <Grid item container spacing={2} xs={12}>
            <Grid item md={6} xs={12}>
              <Button variant={'contained'} className={classes.button}
                      onClick={() => history.push(routesDictionary.login)}>
                {t('login')}
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <Button
                variant={'contained'}
                className={classes.button}
                onClick={() => history.push(routesDictionary.register)}
              >
                {t('register')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Presentation>
  );
}

export default ActivateAccount;
