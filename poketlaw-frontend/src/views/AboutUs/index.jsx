import React from 'react';
import { useStyles } from './styles';
import { Container } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import Team from './Team';
import Photos from './Photos';

function AboutUs() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Carousel itemsToShow={1} isRTL={false}>
        <Photos />
        <Team />
      </Carousel>
    </Container>
  );
}

export default AboutUs;
