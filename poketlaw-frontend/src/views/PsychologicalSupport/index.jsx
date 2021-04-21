import React from 'react';
import { useStyles } from './styles';
import {Container, Grid, Typography} from '@material-ui/core';
import {useTranslation} from "react-i18next";
import Carousel from 'react-elastic-carousel'
import play from '../../media/play.png'

function PsychologicalSupport() {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <Container className={classes.baseContainer}>
      <Grid item container className={classes.baseContainer}>
        <Grid item xs={12}>
          <Typography variant={'h1'} color={'secondary'}>
            {t('welcome')}
          </Typography>
        </Grid>
        <Grid item container xs={12} justify={"center"} className={classes.paragraph}>
          <Typography variant={'h6'} color={'secondary'} align={'center'}>
            {t('welcomeParagraph')}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.carrouselContainer}>
          <Carousel itemsToShow={3}>
            <div className={classes.videoContainer}>
              <img src={play} className={classes.playImage} alt={'play'}/>
            </div>
            <div className={classes.videoContainer}>
              <img src={play} className={classes.playImage} alt={'play'}/>
            </div>
            <div className={classes.videoContainer}>
              <img src={play} className={classes.playImage} alt={'play'}/>
            </div>
            <div className={classes.videoContainer}>
              <img src={play} className={classes.playImage} alt={'play'}/>
            </div>
            <div className={classes.videoContainer}>
              <img src={play} className={classes.playImage} alt={'play'}/>
            </div>
            <div className={classes.videoContainer}>
              <img src={play} className={classes.playImage} alt={'play'}/>
            </div>
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PsychologicalSupport;
