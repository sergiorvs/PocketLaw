import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  headerContainer: {
    backgroundImage: theme.palette.banner.background,
    width: '100%',
    maxHeight: '10rem',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
  },
  menu: {
    top: '2.5%',
    color: theme.palette.primary.main,
    left: '0.425rem',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'inline'
    },
  },
  logoContainer: {
    objectFit: 'contain',
    width: '28rem',
  },
  translateContainer: {
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  menuContainer: {
    position: 'absolute',
    left: '1.5rem',
    width: 'fit-content',
  }
}));
