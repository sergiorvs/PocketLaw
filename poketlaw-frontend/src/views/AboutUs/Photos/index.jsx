import React from 'react';
import { useStyles } from './styles';
import { Avatar, Badge, Grid } from '@material-ui/core';
import image from '../../../media/logo_amigra_Vector_Editable.svg';
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
                    // const win = window.open(' https://www.linkedin.com/company/pocket-law/', '_blank');
                    // win.focus();
                  }}
                />
              </>
            }
          >
            <Avatar
              alt="User photo"
              src={image}
              className={classes.avatar}
              // imgProps={{
              //   className: classes.avatarImg,
              //   onError: () => {
              //     setImage(noPhoto);
              //     console.log('no photo')
              //   }
              // }}
            />
          </Badge>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Photos;
