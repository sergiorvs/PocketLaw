import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Modal from '../../Components/Modal';
import routesDictionary from '../../routes/routesDict';
import { isNull, setLoginTokens } from '../../utils/tools';
import { LOGIN_VERIFICATION } from '../../graphql/mutations/Users';
import { useTranslation } from 'react-i18next';
import Presentation from '../../Components/Presentation';


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
    <Presentation>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Typography variant={'body2'} className={classes.label}>
          {t('emailField')}
        </Typography>
        <TextField
          id="user-input"
          required
          value={email}
          variant={'outlined'}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorForm(false);
          }}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              submit();
            }
          }}
          InputProps={{
            startAdornment: (
              <PermIdentityOutlinedIcon color={'secondary'} className={classes.inputIcon} />
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

        <Typography variant={'body2'} className={classes.label}>
          {t('passwordField')}
        </Typography>
        <TextField
          id="password-input"
          type="password"
          required
          variant={'outlined'}
          value={password}
          error={errorForm}
          helperText={errorForm ? 'Error' : ''}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorForm(false);
          }}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              submit();
            }
          }}
          // className={classes.textField}
          InputProps={{
            startAdornment: (
              <LockOutlinedIcon color={'secondary'} className={classes.inputIcon} />
            ),
            // classes: {
            //   notchedOutline: classes.notchedOutline
            // }
          }}
          classes={{
            root: classes.notchedOutline,
            focused: classes.notchedOutline
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
        <Grid container item xs={12} justify={'space-evenly'}>
          <InstagramIcon
            className={classes.icon}
            onClick={() => {
              const win = window.open('https://www.instagram.com/pocketlaw_/', '_blank');
              win.focus();
            }}
          />
          <LinkedInIcon
            className={classes.icon}
            onClick={() => {
              const win = window.open(' https://www.linkedin.com/company/pocket-law/', '_blank');
              win.focus();
            }}
          />
        </Grid>
        {errorLogin && <Modal setErrorSubmit={setErrorLogin} message={errorMessage} />}
      </form>
    </Presentation>
  );
}

Login.propTypes = propTypes;

export default Login;
