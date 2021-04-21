import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
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
    <Presentation>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Typography variant={'body2'} className={classes.label}>
          {t('firstname')}
        </Typography>
        <TextField
          id="user-input"
          required
          // placeholder={t('firstname')}
          value={firstName}
          error={errorForm['firstName']}
          variant={'outlined'}
          helperText={errorForm['firstName'] || ''}
          onChange={(e) => {
            setFirstName(e.target.value);
            setErrorForm({
              ...errorForm,
              firstName: '',
            });
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
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
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography variant={'body2'} className={classes.label}>
          {t('lastname')}
        </Typography>
        <TextField
          id="user-input"
          required
          // placeholder={t('lastname')}
          value={lastName}
          variant={'outlined'}
          onChange={(e) => {
            setLastName(e.target.value);
            setErrorForm({
              ...errorForm,
              lastName: '',
            });
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              submit();
            }
          }}
          error={errorForm['lastName']}
          helperText={errorForm['lastName'] || ''}
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
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography variant={'body2'} className={classes.label}>
          {t('email')}
        </Typography>
        <TextField
          id="user-input"
          required
          // placeholder={t('email')}
          value={email}
          variant={'outlined'}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorForm({
              ...errorForm,
              email: '',
            });
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              submit();
            }
          }}
          error={errorForm['email']}
          helperText={errorForm['email'] || ''}
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
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography variant={'body2'} className={classes.label}>
          {t('password')}
        </Typography>
        <TextField
          id="password-input"
          type="password"
          required
          value={password}
          variant={'outlined'}
          // placeholder={t('password')}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorForm({
              ...errorForm,
              password: '',
            });
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              submit();
            }
          }}
          error={errorForm['password']}
          helperText={errorForm['password'] || ''}
          className={classes.textField}
          InputProps={{
            startAdornment: (
              <LockOutlinedIcon color={'secondary'} className={classes.inputIcon} />
            ),
          }}
        />

        <Typography variant={'body2'} className={classes.label}>
          {t('repeatPassword')}
        </Typography>
        <TextField
          id="new-password-input"
          type="password"
          required
          variant={'outlined'}
          value={repeatPassword}
          // placeholder={t('repeatPassword')}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              submit();
            }
          }}
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
              <LockOutlinedIcon color={'secondary'} className={classes.inputIcon} />
            ),
          }}
        />
        <FormControl required error={errorForm['termsAndConditions']} component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Checkbox color="secondary" />}
              checked={termsAndConditions}
              onChange={(e) => {
                setTermsAndConditions(e.target.checked);
                setErrorForm({
                  ...errorForm,
                  termsAndConditions: '',
                });
              }}
              label={<Typography variant={'caption'} className={classes.label}>{t('terms')}</Typography>}
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
        {Boolean(Object.keys(errorLogin).length) &&
        <Modal setErrorSubmit={() => {
          setErrorLogin({});
          history.push(routesDictionary.login);
        }} message={errorLogin.description} title={errorLogin.title}
               type={errorLogin.type} />}
      </form>
    </Presentation>
  );
}

Register.propTypes = propTypes;

export default Register;
