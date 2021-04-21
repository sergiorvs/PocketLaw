import React from 'react';
import { useStyles } from './styles';
import { Container, Grid } from '@material-ui/core';
import amigraPanel from '../../media/amigraPanel.jpeg';
import amigraBtn from '../../media/amigraBtn.jpeg';
import amigraLogo from '../../media/logo_amigra_Vector_Editable.svg';

function Amigra() {
  const classes = useStyles();

  return (
    <Container className={classes.baseContainer}>
      <Grid item container className={classes.container}>
        <Grid item container xs={12} justify={'space-between'} className={classes.gridContainer}>
          <Grid item lg={4} md={4} sm={5} xs={8} className={classes.imgContainer}>
            <img src={amigraLogo} alt={'Amigra logo'} className={classes.img} />
          </Grid>
          <Grid item lg={7} md={9} sm={9} xs={12} className={classes.imgContainer}>
            <img src={amigraPanel} alt={'Amigra'} className={classes.img} />
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.imgContainerBtn}>
          <a href={'http://amigraperu.com/'} target={'_blank'} rel='noreferrer'>
            <img src={amigraBtn} alt={'Amigra'} className={classes.img} />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Amigra;
