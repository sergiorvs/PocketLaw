import React from 'react';
import { useStyles } from './styles';
import { Avatar, Badge, Grid, Typography } from '@material-ui/core';
import daniela from '../../../media/daniela_pic.jpeg';
import mariana from '../../../media/mariana_pic.jpeg';
import sergio from '../../../media/sergio.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {useTranslation} from "react-i18next";

function Photos() {
  const classes = useStyles();
  const {t} = useTranslation()

  const team = [
    {
      id: 1,
      title: 'Daniela Zamalloa',
      subtitle: <>{t('danielaSubtitle')}</>,
      description: <>{t('daniela')}</>,
      photo: daniela,
      url: 'https://www.linkedin.com/in/daniela-zamalloa-saavedra-a024471a3/'
    },
    {
      id: 2,
      title: 'Sergio Valdivia',
      subtitle: <>{t('sergioSubtitle')}</>,
      description: <>{t('sergio')}</>,
      photo: sergio,
      url: 'https://www.linkedin.com/in/sergiorvaldivias/'
    },
    {
      id: 3,
      title: 'Mariana Chirinos',
      subtitle: <>{t('marianaSubtitle')}</>,
      description: <>{t('mariana')}</>,
      photo: mariana,
      url: 'https://www.linkedin.com/in/mariana-de-jesus-chirinos-torres-a1a47a160/'
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
              imgProps={{style: {objectFit: 'unset'}}}
            />
          </Badge>
          <Typography variant={"subtitle1"} gutterBottom className={classes.title}>
            {person.title}
          </Typography>
          <Typography variant={"h5"} gutterBottom className={classes.subtitle}>
            {person.subtitle}
          </Typography>
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
