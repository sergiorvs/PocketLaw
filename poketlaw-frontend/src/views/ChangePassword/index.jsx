import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useStyles } from '../Login/styles';
import routesDictionary from '../../routes/routesDict';
import Presentation from '../../Components/Presentation';
import Modal from '../../Components/Modal';
import { useMutation } from '@apollo/client';
import { PASSWORD_RESET } from '../../graphql/mutations/Users';
import { useTranslation } from 'react-i18next';


function ChangePassword() {
  const classes = useStyles();
  const history = useHistory();
  const {t} = useTranslation();
  const [newPassword2, setRepeatPassword] = useState('');
  const [newPassword, setPassword] = useState('');
  const [errorForm, setErrorForm] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [changePassword] = useMutation(PASSWORD_RESET);
  const errorMessage = t('errorMessageChangePassword');

  const {uid, token} = useParams();
  const input = {
    uid,
    token,
  };

  const submit = () => {
    changePassword({
      variables: {
        input,
        newPassword,
        newPassword2
      }
    }).then(response => {
      const {data} = response;
      const {changePassword} = data;

      if (changePassword && !changePassword.success) {
        setErrorForm(true);
        setErrorPassword(true);
      } else {
        history.push(routesDictionary.login);
      }
    });
  };

  return (
    <Presentation>
      <form className={classes.resetForm} noValidate autoComplete="off">
        <TextField
          id="email-input"
          required
          type="password"
          placeholder={t('newPassword')}
          value={newPassword}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorForm(false);
          }}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              submit();
            }
          }}
          InputProps={{
            startAdornment: (
              <LockOutlinedIcon color={'secondary'} className={classes.inputIcon} />
            ),
          }}
          error={errorForm}
          helperText={errorForm ? 'Error' : ''}
          className={classes.textField}
        />
        <TextField
          id="repeat-password-input"
          required
          type="password"
          placeholder={t('repeatPassword')}
          value={newPassword2}
          onChange={(e) => {
            setRepeatPassword(e.target.value);
            setErrorForm(false);
          }}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              submit();
            }
          }}
          InputProps={{
            startAdornment: (
              <LockOutlinedIcon color={'secondary'} className={classes.inputIcon} />
            ),
          }}
          error={errorForm}
          helperText={errorForm ? 'Error' : ''}
          className={classes.textField}
        />
        <Button variant={'contained'} className={classes.button} onClick={() => submit()}>
          {t('send')}
        </Button>
      </form>
      {errorPassword && <Modal setErrorSubmit={setErrorPassword} message={errorMessage} />}
    </Presentation>
  );
}

export default ChangePassword;
