import React from 'react';
import { useStyles } from './styles';
import LOGO from '../../media/1.png';
import { useHistory } from 'react-router-dom';
import routesDictionary from '../../routes/routesDict';

export function Logo() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <img src={LOGO} className={classes.logo} onClick={() => history.push(routesDictionary.dashboard)} alt={'logo'} />
  );
}
