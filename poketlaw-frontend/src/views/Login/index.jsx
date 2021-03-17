import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import { Button, Divider, Grid, TextField, Typography } from '@material-ui/core';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Modal from '../../Components/Modal';
import Presentation from '../../Components/Presentation';
import routesDictionary from '../../routes/routesDict';
import { isNull, setLoginTokens } from '../../utils/tools';
import { LOGIN_VERIFICATION } from '../../graphql/mutations/Users';
import { useTranslation } from 'react-i18next';


const propTypes = {
  setLoginState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};


function Login({setLoginState}) {
  const classes = useStyles();
  const history = useHistory();
  const {t} = useTranslation();
  const [errorLogin, setErrorLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorForm, setErrorForm] = useState(false);
  const [addTodo] = useMutation(LOGIN_VERIFICATION);
  const errorMessage = t('errorMessage');

  const submit = () => {
    addTodo({
      variables: {
        email,
        password,
      }
    }).then(response => {
      const {data} = response;
      const {tokenAuth} = data;

      if (isNull(tokenAuth)) {
        setErrorLogin(true);
        setErrorForm(true);
      } else {
        setLoginTokens(tokenAuth.token);
        setLoginState(tokenAuth.token);
        history.push(routesDictionary.dashboard);
      }
    });
  };

  return (
    <Grid container justify={'center'} alignContent={'center'} className={classes.baseContainer}>
      <Grid item container justify={'center'} alignContent={'center'}>
        <Grid
          item
          container
          sm={5}
          md={5}
          justify={'flex-end'}
          alignContent={'center'}
          className={classes.presentationContainer}>
          <Presentation />
        </Grid>
        <Grid item sm={1} md={2} container justify={'center'}>
          <Divider orientation="vertical" className={classes.divider} />
        </Grid>
        <Grid
          item
          container
          sm={5}
          md={5}
          justify={'flex-start'}
          alignContent={'center'}
          className={classes.loginContainer}
        >
          <Grid item sm={10} md={6}>
            <Typography color={'primary'} align={'center'} variant={'h3'} className={classes.marginBottom}>
              {t('login')}
            </Typography>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="user-input"
                required
                placeholder={'Email'}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorForm(false);
                }}
                InputProps={{
                  startAdornment: (
                    <PermIdentityOutlinedIcon color={'primary'} className={classes.inputIcon} />
                  ),
                  autocomplete: 'new-password',
                  form: {
                    autocomplete: 'off',
                  },
                }}
                autoComplete='no'
                helperText={errorForm ? 'Error' : ''}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="password-input"
                type="password"
                required
                value={password}
                placeholder={'Contraseña'}
                error={errorForm}
                helperText={errorForm ? 'Error' : ''}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorForm(false);
                }}
                className={classes.textField}
                InputProps={{
                  startAdornment: (
                    <LockOutlinedIcon color={'primary'} className={classes.inputIcon} />
                  ),
                }}
              />
              <Button variant={'contained'} className={classes.button} onClick={() => submit()}>
                {t('login')}
              </Button>
              <Typography
                variant={'body1'}
                align={'center'}
                className={classes.link}
                onClick={() => history.push(routesDictionary.passwordReset)}
              >
                {t('passwordForgotten')}
              </Typography>
              <Typography
                variant={'body1'}
                align={'center'}
                className={classes.link}
                onClick={() => history.push(routesDictionary.register)}
              >
                {t('register')}
              </Typography>
            </form>
          </Grid>
        </Grid>
        {errorLogin && <Modal setErrorSubmit={setErrorLogin} message={errorMessage} />}
      </Grid>
    </Grid>
  );
}

Login.propTypes = propTypes;

export default Login;
