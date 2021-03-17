import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Modal from '../../Components/Modal';
import Presentation from '../../Components/Presentation';
import routesDictionary from '../../routes/routesDict';
import { CREATE_USER } from '../../graphql/mutations/Users';
import { isNull } from '../../utils/tools';
import { useTranslation } from 'react-i18next';


const propTypes = {
  setLoginState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};


function Register({setLoginState}) {
  const classes = useStyles();
  const {t} = useTranslation();
  const history = useHistory();
  const [errorLogin, setErrorLogin] = useState({});
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [errorForm, setErrorForm] = useState({});

  const [addTodo] = useMutation(CREATE_USER);

  const submit = (e) => {
    e.preventDefault();
    addTodo({
      variables: {
        input: {
          email,
          password,
          firstName,
          lastName,
          repeatPassword,
          termsAndConditions,
        }
      }
    }).then(response => {
      const {data} = response;
      const {createUser = {}} = data;
      const {errors = []} = createUser;

      if (!isNull(errors) && errors.length) {
        const temp = {};
        errors.forEach(error => {
          const snakeToCamel = (str) => str.replace(
            /([-_][a-z])/g,
            (group) => group.toUpperCase()
              .replace('-', '')
              .replace('_', '')
          );
          temp[snakeToCamel(error.field)] = error.messages.join(', ');
        });
        setErrorForm(temp);
      } else {
        const {message = {}} = createUser;
        const {description, type, title} = message;
        setErrorForm({});
        setErrorLogin({
          description,
          type: type.toLowerCase(),
          title
        });
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
              {t('register')}
            </Typography>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="user-input"
                required
                placeholder={t('firstname')}
                value={firstName}
                error={errorForm['firstName']}
                helperText={errorForm['firstName'] || ''}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setErrorForm({
                    ...errorForm,
                    firstName: '',
                  });
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
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="user-input"
                required
                placeholder={t('lastname')}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setErrorForm({
                    ...errorForm,
                    lastName: '',
                  });
                }}
                error={errorForm['lastName']}
                helperText={errorForm['lastName'] || ''}
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
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="user-input"
                required
                placeholder={t('email')}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorForm({
                    ...errorForm,
                    email: '',
                  });
                }}
                error={errorForm['email']}
                helperText={errorForm['email'] || ''}
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
                placeholder={t('password')}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorForm({
                    ...errorForm,
                    password: '',
                  });
                }}
                error={errorForm['password']}
                helperText={errorForm['password'] || ''}
                className={classes.textField}
                InputProps={{
                  startAdornment: (
                    <LockOutlinedIcon color={'primary'} className={classes.inputIcon} />
                  ),
                }}
              />
              <TextField
                id="new-password-input"
                type="password"
                required
                value={repeatPassword}
                placeholder={t('repeatPassword')}
                onChange={(e) => {
                  setRepeatPassword(e.target.value);
                  setErrorForm({
                    ...errorForm,
                    repeatPassword: '',
                  });
                }}
                error={errorForm['repeatPassword']}
                helperText={errorForm['repeatPassword'] || ''}
                className={classes.textField}
                InputProps={{
                  startAdornment: (
                    <LockOutlinedIcon color={'primary'} className={classes.inputIcon} />
                  ),
                }}
              />
              <FormControl required error={errorForm['termsAndConditions']} component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="top"
                    control={<Checkbox color="primary" />}
                    checked={termsAndConditions}
                    onChange={(e) => {
                      setTermsAndConditions(e.target.checked);
                      setErrorForm({
                        ...errorForm,
                        termsAndConditions: '',
                      });
                    }}
                    label={<Typography color={'primary'}>{t('terms')}</Typography>}
                    labelPlacement="left"
                  />
                </FormGroup>
                <FormHelperText>{errorForm['termsAndConditions']}</FormHelperText>
              </FormControl>
              <Button variant={'contained'} className={classes.button} onClick={submit}>
                {t('register')}
              </Button>
              <Typography
                variant={'body1'}
                align={'center'}
                className={classes.link}
                onClick={() => history.push(routesDictionary.login)}
              >
                {t('alreadyRegistered')}
              </Typography>
            </form>
          </Grid>
        </Grid>
        {Boolean(Object.keys(errorLogin).length) &&
        <Modal setErrorSubmit={() => {
          setErrorLogin({});
          history.push(routesDictionary.login);
        }} message={errorLogin.description} title={errorLogin.title}
               type={errorLogin.type} />}
      </Grid>
    </Grid>
  );
}

Register.propTypes = propTypes;

export default Register;
