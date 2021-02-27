import React, { useState } from 'react';
import {
  useHistory,
  useParams
} from 'react-router-dom';
import {
  Button,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useStyles } from '../Login/styles';
import routesDictionary from '../../routes/routesDict';
import Presentation from '../../Components/Presentation';
import Modal from '../../Components/Modal';
import { useMutation } from "@apollo/client";
import { PASSWORD_RESET } from "../../graphql/mutations/Users";


function ChangePassword() {
  const classes = useStyles();
  const history = useHistory();
  const [newPassword2, setRepeatPassword] = useState('');
  const [newPassword, setPassword] = useState('');
  const [errorForm, setErrorForm] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [changePassword] = useMutation(PASSWORD_RESET);
  const errorMessage = 'Las contraseñas no son iguales, intente nuevamente';

  const {uid, token} = useParams();
  const input = {
    uid,
    token,
  };

  const submit = () => {
    console.log(uid, token)
    changePassword({
      variables: {
        input,
        newPassword,
        newPassword2
      }
    }).then(response => {
      const { data } = response;
      const { restorePassword } = data;

      if(restorePassword && !restorePassword.success) {
        setErrorForm(true);
        setErrorPassword(true);
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
      <Grid
        item
        container
        sm={5}
        justify={"flex-start"}
        alignContent={"center"}
        className={classes.resetPasswordContainer}
      >
        <Grid item sm={10} md={7}>
          <Typography color={"primary"} align={"center"} variant={"h3"} className={classes.marginBottom}>
            Change Password
          </Typography>
          <form className={classes.resetForm} noValidate autoComplete="off">
            <TextField
              id="email-input"
              required
              type="password"
              placeholder={"New Password"}
              value={newPassword}
              onChange={(e)=>{
                setPassword(e.target.value);
                setErrorForm(false);
              }}
              InputProps={{
                startAdornment: (
                  <LockOutlinedIcon color={"primary"} className={classes.inputIcon} />
                ),
              }}
              error={errorForm}
              helperText={errorForm ? "Error" : ''}
              className={classes.textField}
            />
            <TextField
              id="repeat-password-input"
              required
              type="password"
              placeholder={"Repeat Password"}
              value={newPassword2}
              onChange={(e)=>{
                setRepeatPassword(e.target.value);
                setErrorForm(false);
              }}
              InputProps={{
                startAdornment: (
                  <LockOutlinedIcon color={"primary"} className={classes.inputIcon}/>
                ),
              }}
              error={errorForm}
              helperText={errorForm ? "Error" : ''}
              className={classes.textField}
            />
            <Button variant={"contained"} className={classes.button} onClick={()=>submit()}>
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
      {errorPassword && <Modal setErrorSubmit={setErrorPassword} message={errorMessage} />}
    </Grid>
  );
}

export default ChangePassword;
