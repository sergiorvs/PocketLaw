import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Badge, Button, Divider, Drawer, Grid, Typography, } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Sider from '../../Components/Sider';
import LOGO from '../../media/logo.png';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import routesDictionary from '../../routes/routesDict';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';
import { useApolloClient } from '@apollo/client';
import { UPDATE_ACCOUNT, VERIFY_TOKEN } from '../../graphql/mutations/Users';
import { getAuthTokenName, getImageUrl, isNull } from '../../utils/tools';
import { GET_USER_SESSION } from '../../graphql/queries/User';
import { AUTH_TOKEN } from '../../settings/constants';
import { useTranslation } from 'react-i18next';
import noPhoto from '../../media/noPhoto.jpeg';


export default function SiderWrapper({children, setLoginState, isLogin, userSession, setUserSession}) {
  const classes = useStyles();
  const history = useHistory();
  const {t} = useTranslation();
  const client = useApolloClient();
  const token = localStorage.getItem(AUTH_TOKEN);
  const [image, setImage] = useState(getImageUrl(userSession?.profilePicture) || LOGO);

  const [openDrawer, setOpenDrawer] = useState(false);

  const logout = useCallback(() => {
    localStorage.removeItem(getAuthTokenName());
    setLoginState(false);
    history.push(routesDictionary.dashboard);
  }, [history, setLoginState]);

  const handleChangePhoto = (e) => {
    client.mutate({
      mutation: UPDATE_ACCOUNT,
      variables: {imageProfile: e.target.files[0]}
    }).then((response) => {
      client.query({
        query: GET_USER_SESSION,
        fetchPolicy: 'no-cache',
      }).then((response) => {
        const {data} = response;
        const {me = {}} = data;
        setUserSession(me);
      });
    });
  };

  useEffect(() => {
    if (token) {
      client.mutate({
        mutation: VERIFY_TOKEN,
        fetchPolicy: 'no-cache',
        variables: {
          token: token,
        },
      }).then(({data}) => {
        const {verifyToken = 0} = data ? data : {};
        if (isNull(verifyToken)) {
          logout();
        }
      });
    }
  }, [client, logout, token]);

  const SIDER_CONTENT = <>
    <Grid
      item
      container
      alignContent={'center'}
      justify={'center'}
    >
      {isLogin && (
        <React.Fragment>
          <Grid item container className={classes.siderHeader}>
            <Grid item xs={12} className={classes.logoContainer}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={
                  <>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="icon-button-file"
                      type="file"
                      onChange={handleChangePhoto}
                    />
                    <label htmlFor="icon-button-file">
                      <div id="dashboard_admin_span_icon" className={classes.changePhoto}>
                        <AddAPhotoIcon color={'inherit'} />
                      </div>
                    </label>
                  </>
                }
              >
                <Avatar
                  alt="User photo"
                  src={getImageUrl(userSession?.profilePicture) || noPhoto}
                  className={classes.avatar}
                  imgProps={{className: classes.avatarImg}}
                  onError={() => setImage(noPhoto)}
                />
              </Badge>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'h6'} align={'center'}>
                {`${userSession?.firstName} ${userSession?.lastName}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align={'center'}>
                {userSession?.email}
              </Typography>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" className={classes.divider} />
        </React.Fragment>)
      }
      <Sider isLogin={isLogin} />
    </Grid>
    <Divider orientation="horizontal" className={classes.divider} />
    {isLogin ? (
      <Grid item xs={12} className={classes.logoutContainer}>
        <Typography align={'center'} onClick={logout} className={classes.logout}>
          {t('logout')}
        </Typography>
      </Grid>
    ) : (
      <Grid item container xs={12} className={classes.buttonContainer}>
        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Button variant={'contained'} className={classes.button}
                    onClick={() => history.push(routesDictionary.login)}>
              {t('login')}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant={'contained'} className={classes.button}
                    onClick={() => history.push(routesDictionary.register)}>
              {t('register')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )}
  </>;

  return (
    <Grid container alignItems={'flex-start'} className={classes.wrapperContent}>
      <Grid item container direction={'column'} className={classes.wrapper}>
        <Header isLogin={isLogin} setOpenDrawer={setOpenDrawer} />
        <Grid xs={12} item container className={classes.container}>
          <Grid item container xs={2} className={classes.siderBackground}>
            {SIDER_CONTENT}
          </Grid>
          <Drawer
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor={'left'}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            {SIDER_CONTENT}
          </Drawer>
          <Grid item md={10} sm={12} className={classes.content}>
            {children}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
