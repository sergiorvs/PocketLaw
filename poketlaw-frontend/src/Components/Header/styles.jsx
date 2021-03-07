import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  headerContainer: {
    backgroundImage: theme.palette.banner.background,
    width: '100%',
    maxHeight: '10rem',
    padding: '1rem',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer:{
    objectFit: 'contain',
    width: '28rem',
  },
}));
