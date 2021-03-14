import React from 'react';
import { useStyles } from './styles';
import { Container } from '@material-ui/core';
import clsx from 'clsx';
import { Logo } from '../../Components/Logo';

function AboutUs() {
  const classes = useStyles();

  return (
    <Container className={classes.baseContainer}>
      <div className={classes.circleContainer}>
        <div className={classes.logoContainer}>
          <Logo />
        </div>
        <div className={clsx(classes.item, classes.deg0)} />
        <div className={clsx(classes.item, classes.deg25)} />
        <div className={clsx(classes.item, classes.deg45)} />
        <div className={clsx(classes.item, classes.deg135)} />
        <div className={clsx(classes.item, classes.deg180)} />
        <div className={clsx(classes.item, classes.deg225)} />
        <div className={clsx(classes.item, classes.deg90)} />
        <div className={clsx(classes.item, classes.deg315)} />
      </div>
    </Container>
  );
}

export default AboutUs;
