import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundImage: theme.palette.banner.background,
    width: '100%',
    // maxHeight: '14rem',
    padding: '1rem',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  logoContainer: {
    objectFit: 'contain',
    width: '28rem',
    [theme.breakpoints.down('sm')]: {
      width: '16rem',
    },
  },
  politics: {
    cursor: 'pointer',
    marginTop: '1rem'
  },
  book: {
    maxWidth: '18rem',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      order: 2,
      margin: '1rem 0',
      maxWidth: '14rem',
    },
  },
  bookImage: {
    width: '100%',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      order: 2,
      margin: '1rem 0'
    },
  },
  icon: {
    fontSize: 40,
    margin: '1rem 0 0',
    cursor: 'pointer'
  },
  followUs: {
    fontWeight: 'bold'
  },
  socialNetwork: {
    [theme.breakpoints.down('sm')]: {
      order: 3,
    },
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      order: 0,
    },
  },
}));
