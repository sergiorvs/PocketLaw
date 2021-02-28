import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  headerContainer: {
    backgroundImage: theme.palette.banner.background,
    width: '100%',
    maxHeight: '12vh',
    padding: '1rem',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer:{
    objectFit: 'contain',
    height: '18rem',
  },
}));
