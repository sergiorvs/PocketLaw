import React from 'react';
import { useStyles } from './styles';
import { Container, Grid, Typography } from '@material-ui/core';
import amigraPanel from '../../media/amigraPanel.jpeg';
import amigraBtn from '../../media/amigraBtn.jpeg';
import amigraLogo from '../../media/logo_amigra_Vector_Editable.svg';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

function Amigra() {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <Container className={classes.baseContainer}>
      <Grid item container className={classes.container}>
        <Typography variant={'h4'} gutterBottom align={'center'} className={classes.amigraTitle}>
          {t('amigraText')}
        </Typography>
        <Grid item container xs={12} justify={'space-between'} alignItems={'center'} className={classes.gridContainer}>
          <Grid item lg={4} md={4} sm={5} xs={8} className={classes.imgContainer}>
            <img src={amigraLogo} alt={'Amigra logo'} className={classes.img} />
          </Grid>
          <Grid item lg={7} md={9} sm={9} xs={12} className={classes.imgContainer}>
            {/*<img src={amigraPanel} alt={'Amigra'} className={classes.img} />*/}
            <Typography variant={'h3'} gutterBottom align={'left'} className={classes.amigra}>
              AMIGRA
            </Typography>
            <Typography variant={'h4'} gutterBottom align={'left'} className={classes.amigra}>
              {t('amigraPanel')}
            </Typography>
            <Typography variant={'body1'} gutterBottom align={'left'} className={clsx(classes.amigra, classes.amigraLineHeight)}>
              {t('amigraPanelText')}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.imgContainerBtn}>
          <a href={'http://amigraperu.com/'} target={'_blank'} rel="noreferrer">
            <img src={amigraBtn} alt={'Amigra'} className={classes.img} />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Amigra;
