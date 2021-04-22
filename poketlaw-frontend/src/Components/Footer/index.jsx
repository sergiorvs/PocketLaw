import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Logo } from '../Logo';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { GET_COMPLAIN_BOOK, GET_PRIVACY_POLITICS } from '../../graphql/queries/Core';
import { BACKEND_URL } from '../../settings/constants';
import book from '../../media/libro-de-reclamaciones.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Facebook } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';


export function Footer() {
  const classes = useStyles();
  const {t} = useTranslation();
  const {data} = useQuery(GET_PRIVACY_POLITICS);
  const {data: complainBook} = useQuery(GET_COMPLAIN_BOOK);

  return (
    <Grid
      container item
      alignItems={'center'}
      className={classes.footerContainer}
    >
      <Grid container item md={2} sm={12} justify={'center'} className={classes.socialNetwork}>
        <Grid item xs={12}>
          <Typography align={'center'} className={classes.followUs}>
            {t('followUs')}
          </Typography>
        </Grid>
        <Grid container item xs={12} justify={'space-evenly'}>
          <InstagramIcon
            className={classes.icon}
            onClick={() => {
              const win = window.open('https://www.instagram.com/pocketlaw_/', '_blank');
              win.focus();
            }}
          />
          <Facebook
            className={classes.icon}
            onClick={() => {
              const win = window.open('https://www.facebook.com/Pocket-Law-540348193549400', '_blank');
              win.focus();
            }}
          />
          <LinkedInIcon
            className={classes.icon}
            onClick={() => {
              const win = window.open(' https://www.linkedin.com/company/pocket-law/', '_blank');
              win.focus();
            }}
          />
          <MailIcon
            className={classes.icon}
            onClick={() => {
              const win = window.open(' https://mail.google.com/mail/u/0/?fs=1&to=pocketlaw19@gmail.com&tf=cm', '_blank');
              win.focus();
            }}
          />
        </Grid>
        <Grid item container justify={'center'} className={classes.politics} sm={12}>
          <a href={`${BACKEND_URL}${data?.privacyPolitics}`}
             target={'_blank'} rel={'noreferrer'}>
            <Typography variant={'caption'} style={{borderBottom: '1px solid'}} gutterBottom>
              {t('privacy')}
            </Typography>
          </a>
        </Grid>
      </Grid>
      <Grid item container md={8} sm={12} justify={'center'} alignItems={'center'} className={classes.logo}>
        <Grid item className={classes.logoContainer}>
          <Logo />
        </Grid>
      </Grid>
      <Grid item md={2} className={classes.book}>
        <a href={`${BACKEND_URL}${complainBook?.complaintsBook}`}
           target={'_blank'} rel={'noreferrer'}>
          <img src={book} alt={'Libro de reclamaciones'} className={classes.bookImage} />
        </a>
      </Grid>
    </Grid>
  );
}
