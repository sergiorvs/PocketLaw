import React from 'react';
import { useStyles } from './styles';
import { Avatar, Badge, Grid } from '@material-ui/core';
import daniela from '../../../media/daniela_pic.jpeg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Photos() {
  const classes = useStyles();

  return (
    <Grid item container className={classes.baseContainer}>
      <Grid item xs={12}>
        <Grid item xs={12} className={classes.logoContainer}>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={
              <>
                <LinkedInIcon
                  className={classes.icon}
                  onClick={() => {
                    const win = window.open(' https://www.linkedin.com/in/daniela-zamalloa-saavedra-a024471a3/', '_blank');
                    win.focus();
                  }}
                />
              </>
            }
          >
            <Avatar
              alt="User photo"
              src={daniela}
              className={classes.avatar}
            />
          </Badge>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Photos;
