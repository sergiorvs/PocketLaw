import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  withStyles,
  Grid,
  ListItemIcon,
} from '@material-ui/core';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import menuList from './constants';

import styles from './styles';

const Sider = (
  {
    classes,
    logout,
    location,
  }) => {
  const { pathname } = location;
  const menu = menuList(logout);
  const indexSelected = menu.findIndex((item) => pathname === item.link);
  const postIndexSelected = indexSelected + 1;
  const preIndexSelected = indexSelected - 1;

  return (
    <List className={classes.siderContent}>
      {menu.map((item, index) => (
        <Grid
          key={item.name}
          className={(index === indexSelected)
            ? classes.selectedBackground
            : classes.normalBackground}
        >
          <Link to={item.link} className={classes.siderLink}>
            <ListItem
              selected={index === indexSelected}
              button
              className={
                `${classes.siderItems}
              ${index === postIndexSelected ? classes.postSelected : ''}
              ${index === preIndexSelected ? classes.preSelected : ''}`
              }
            >
              <ListItemIcon className={classes.siderIcon}>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                className={classes.siderText}
                primary={item.name}
              />
            </ListItem>
          </Link>
        </Grid>
      ))}
    </List>
  );
}

export default withRouter(withStyles(styles)(Sider));
