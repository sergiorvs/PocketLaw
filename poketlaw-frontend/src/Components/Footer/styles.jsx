import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundImage: theme.palette.banner.background,
    width: '100%',
    maxHeight: '12vh',
    padding: '1rem',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  logoContainer:{
    objectFit: 'contain',
    height: '18rem',
  },
}));
