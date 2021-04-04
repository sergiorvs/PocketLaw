import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  headerContainer: {
    backgroundImage: theme.palette.banner.background,
    width: '100%',
    maxHeight: '10rem',
    padding: '1rem',
  },
  menu: {
    top: '2.5%',
    color: theme.palette.primary.main,
    left: '0.425rem',
    [theme.breakpoints.up('sm')]: {display: 'none'
    },
    [theme.breakpoints.down('sm')]: {display: 'inline'
    },
  },
  logoContainer:{
    objectFit: 'contain',
    width: '28rem',
  },
  translateContainer: {
    width: 'min-content'
  }
}));
