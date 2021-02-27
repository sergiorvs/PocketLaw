import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import MakeRouteWithSubRoutes from '../../routes';
import routes from '../../routes/routeList';
import styles from './styles';

function LayoutView(props) {
  const { classes, isLogin } = props;

  return (
    [
      <Grid
        container
        alignItems={isLogin ? undefined : 'center'}
        key="generalContainer"
        className={isLogin ? classes.baseContainerLogin : classes.baseContainer}
      >
        <Grid container item sm={12} justify="center" style={{height: '100%'}}>
          <Switch>
            {routes.map(
              (route) => (
                <MakeRouteWithSubRoutes
                  id={route.path}
                  key={route.path}
                  {...props}
                  {...route}
                />
              ),
            )}
          </Switch>
        </Grid>
      </Grid>
    ]
  );
}

LayoutView.propTypes = {
  isLogin: PropTypes.bool,
};

LayoutView.defaultProps = {
  isLogin: false,
};

export default withStyles(styles)(React.memo(LayoutView,
  (prevProps, nextProps) => prevProps.isLogin === nextProps.isLogin));
