import React from 'react';
import { useStyles } from './styles';
import { Avatar, Badge, Grid, Typography } from '@material-ui/core';
import daniela from '../../../media/daniela_pic.jpeg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Photos() {
  const classes = useStyles();

  const team = [
    {
      id: 1,
      description: 'description dasjdn ndaskjnd  kjashds asdna diuashduiasd',
      photo: daniela,
      url: 'https://www.linkedin.com/in/daniela-zamalloa-saavedra-a024471a3/'
    },
    {
      id: 2,
      description: 'description dasjdn ndaskjnd  kjashds asdna diuashduiasd',
      photo: daniela,
      url: 'https://www.linkedin.com/in/daniela-zamalloa-saavedra-a024471a3/'
    },
    {
      id: 3,
      description: 'description dasjdn ndaskjnd  kjashds asdna diuashduiasd',
      photo: daniela,
      url: 'https://www.linkedin.com/in/daniela-zamalloa-saavedra-a024471a3/'
    }
  ];

  return (
    <Grid item container xs={12} className={classes.baseContainer} justify={'space-evenly'} alignContent={'center'}>
      {team.map(person => (
        <Grid item key={person.id} className={classes.logoContainer}>
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
                    const win = window.open(person.url, '_blank');
                    win.focus();
                  }}
                />
              </>
            }
          >
            <Avatar
              alt="User photo"
              src={person.photo}
              className={classes.avatar}
            />
          </Badge>
          <Typography gutterBottom className={classes.description}>
            {person.description}
          </Typography>
        </Grid>
      ))
      }
    </Grid>
  );
}

export default Photos;
