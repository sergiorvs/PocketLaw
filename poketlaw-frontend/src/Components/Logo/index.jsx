import React from 'react';
import { useStyles } from './styles';
import { ReactComponent as LOGO } from '../../media/1.svg';
import { useHistory } from 'react-router-dom';
import routesDictionary from '../../routes/routesDict';

export function Logo() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <LOGO className={classes.logo} onClick={() => history.push(routesDictionary.dashboard)} />
  );
}
