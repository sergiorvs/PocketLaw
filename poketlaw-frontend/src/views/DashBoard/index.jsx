import React, { useState } from 'react';
import { useStyles } from './styles';
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LOGO from "../../media/logo.png";
import SearchBar from "../../Components/SearchBar";
import routesDictionary from "../../routes/routesDict";
import LawsList from "../../Components/LawsList";

function Dashboard() {
  const classes = useStyles();
  const history = useHistory();

  // States
  const [searchFilter, setSearchFilter] = useState('')

  return (
    <Grid container justify={"center"} alignContent={"center"} className={classes.baseContainer}>
      <Grid
        container item
        alignItems={"center"}
        className={classes.headerContainer}
      >
        <Grid item container justify={"flex-end"} md={7}>
          <Grid item>
            <Typography
              color={"primary"}
              align={"left"}
              variant={"h3"}
              className={classes.marginLeft}
            >
              Poket Law
            </Typography>
          </Grid>
        </Grid>
        <Grid item container
              justify={"flex-end"} alignItems={"center"} md={5}
        >
          <Grid item container md={7}
                style={{marginRight:'5px'}}
          >
            <Grid item container justify={"flex-end"} style={{paddingBottom: '3px'}}>
              <Button
                id={'dashboard_admin_button_go_back'}
                variant={"contained"}
                className={classes.button}
                onClick={() => history.push(routesDictionary.login)}
              >
                Iniciar Sesion
              </Button>
            </Grid>
            <Grid item container justify={"flex-end"}>
              <Button
                id={'dashboard_admin_button_go_back'}
                variant={"contained"}
                className={classes.button}
              >
                Registrarse
              </Button>
            </Grid>
          </Grid>
          <Grid item className={classes.logoContainer}>
            <img alt={"Logo"} src={LOGO} className={classes.logo}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.lawsContainer}>
        <SearchBar
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Grid
          item container sm={12}
          alignItems={"flex-start"}
          className={classes.lawsDescriptionContainer}
        >
          <LawsList searchFilter={searchFilter}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
