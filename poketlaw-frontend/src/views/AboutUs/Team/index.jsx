import React from 'react';
import { useStyles } from './styles';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import icon1 from '../../../media/icon1.svg';
import icon2 from '../../../media/icon2.svg';
import icon3 from '../../../media/icon3.svg';
import icon4 from '../../../media/icon4.svg';
import icon5 from '../../../media/icon5.svg';
import icon6 from '../../../media/icon6.svg';
import icon7 from '../../../media/icon7.svg';
import icon8 from '../../../media/icon8.svg';
import logo from '../../../media/aboutUs.svg';
import background from '../../../media/background.png';
import { ReactComponent as People } from '../../../media/people.svg';

function Team() {
  const classes = useStyles();

  return (
    <Grid item container className={classes.baseContainer}>
      <Grid item lg={3} md={12}>
        <People className={classes.people} />
      </Grid>
      <Grid item lg={9} md={12} sm={12}>
        <div className={classes.circleContainer}>
          <div className={classes.logoContainer}>
            <img src={logo} className={classes.logo} alt={'logo'} />
          </div>
          <div className={classes.backgroundContainer}>
            <img src={background} className={classes.logo} alt={'logo'} />
          </div>
          <div className={clsx(classes.item, classes.deg0)}>
            <img src={icon3} className={classes.icon} alt={'icon'} />
          </div>
          <div className={clsx(classes.item, classes.deg25)}>
            <img src={icon7} className={classes.icon} alt={'icon'} />
          </div>
          <div className={clsx(classes.item, classes.deg45)}>
            <img src={icon6} className={classes.icon} alt={'icon'} />
          </div>
          <div className={clsx(classes.item, classes.deg135)}>
            <img src={icon8} className={classes.icon} alt={'icon'} />
          </div>
          <div className={clsx(classes.item, classes.deg180)}>
            <img src={icon2} className={classes.icon} alt={'icon'} />
          </div>
          <div className={clsx(classes.item, classes.deg225)}>
            <img src={icon1} className={classes.icon} alt={'icon'} />
          </div>
          <div className={clsx(classes.item, classes.deg90)}>
            <img src={icon5} className={classes.icon} alt={'icon'} />
          </div>
          <div className={clsx(classes.item, classes.deg315)}>
            <img src={icon4} className={classes.icon} alt={'icon'} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Team;
