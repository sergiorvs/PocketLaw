import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
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
  const errorMessage = t('errorMessagePassword', { email });

  const submit = () => {
    resetLink({
      variables: {
        email
      }
    }).then(response => {
      const { data } = response;
      const { sendResetPassword } = data;
      const { success } = sendResetPassword;

      if(!success) {
        setErrorLogin(true);
        setErrorForm(true);
      } else {
        history.push(routesDictionary.login)
      }
    });
  }

  return (
    <Grid container justify={"center"} alignContent={"center"} className={classes.baseContainer}>
      <Grid
        item
        container
        sm={5}
        xs={12}
        justify={"flex-end"}
        alignContent={"center"}
        className={classes.presentationContainer}
      >
      <Presentation />
      </Grid>
      <Grid item sm={1} md={2} container justify={"center"}>
        <Divider orientation="vertical" className={classes.divider} />
      </Grid>
      <Grid item container sm={5} justify={"flex-start"} alignContent={"center"} className={classes.resetPasswordContainer}>
        <Grid item sm={10} md={7}>
          <Typography color={"primary"} align={"center"} variant={"h3"} className={classes.marginBottom}>
            {t('restartPassword')}
          </Typography>
          <form className={classes.resetForm} noValidate autoComplete="off">
            <TextField
              id="email-input"
              required
              placeholder={t('email')}
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
                setErrorForm(false);
              }}
              InputProps={{
                startAdornment: (
                  <MailOutlined color={"primary"} className={classes.inputIcon} />
                ),
              }}
              error={errorForm}
              helperText={errorForm ? "Error" : ''}
              className={classes.textField}
            />
            <Typography variant={"subtitle2"} className={classes.resetDescription}>
              {t('restartPasswordLink')}
            </Typography>
            <Button variant={"contained"} className={classes.button} onClick={()=>submit()}>
              {t('send')}
            </Button>
          </form>
        </Grid>
      </Grid>
      {errorLogin && <Modal setErrorSubmit={setErrorLogin} message={errorMessage} />}
    </Grid>
  );
}

PasswordReset.propTypes = propTypes;

export default PasswordReset;
