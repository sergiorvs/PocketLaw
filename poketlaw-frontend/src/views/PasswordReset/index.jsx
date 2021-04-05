import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Typography, } from '@material-ui/core';
import { MailOutlined } from '@material-ui/icons';
import Presentation from '../../Components/Presentation';
import Modal from '../../Components/Modal';
import routesDictionary from '../../routes/routesDict';
import { useStyles } from '../Login/styles';
import { PASSWORD_RESET_LINK } from '../../graphql/mutations/Users';
import { useTranslation } from 'react-i18next';


const propTypes = {
  setLoginState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};


function PasswordReset() {
  const classes = useStyles();
  const history = useHistory();
  const {t} = useTranslation();
  const [errorLogin, setErrorLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [errorForm, setErrorForm] = useState(false);
  const [resetLink] = useMutation(PASSWORD_RESET_LINK);
  const errorMessage = t('errorMessagePassword', {email});

  const submit = () => {
    resetLink({
      variables: {
        email
      }
    }).then(response => {
      const {data} = response;
      const {restorePassword} = data;
      const {success} = restorePassword;

      if (!success) {
        setErrorLogin(true);
        setErrorForm(true);
      } else {
        history.push(routesDictionary.login);
      }
    });
  };

  return (
    <Presentation>
      <form className={classes.resetForm} noValidate autoComplete="off">
        <Typography variant={'body2'} gutterBottom className={classes.label}>
          {t('emailField')}
        </Typography>
        <TextField
          id="email-input"
          required
          value={email}
          variant={'outlined'}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorForm(false);
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              submit();
            }
          }}
          InputProps={{
            startAdornment: (
              <MailOutlined color={'secondary'} className={classes.inputIcon} />
            ),
          }}
          error={errorForm}
          helperText={errorForm ? 'Error' : ''}
          className={classes.textField}
        />
        <Typography variant={'subtitle2'} className={classes.resetDescription}>
          {t('restartPasswordLink')}
        </Typography>
        <Button variant={'contained'} className={classes.button} onClick={() => submit()}>
          {t('send')}
        </Button>
        {errorLogin && <Modal setErrorSubmit={setErrorLogin} message={errorMessage} />}
      </form>
    </Presentation>
  );
}

PasswordReset.propTypes = propTypes;

export default PasswordReset;
