import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    display: 'flex',
    backgroundColor: '#eff5f8',
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '5rem 4rem',
    [theme.breakpoints.down('md')]: {
      padding: '3rem 2rem',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
      padding: '1rem 1rem',
    },
  },
  welcome: {
    fontSize: '32px',
  },
  paragraph: {
    marginTop: '0.625rem',
  },
  carrouselContainer: {
    marginTop: '5rem',
  },
  videoContainer: {
    width: '13rem',
    height: '13rem',
    background: 'rgba(0.25, 0.25, 0.25, 0.25)',
  },
  playImage: {
    width: '100%',
    height: '100%',
  }
}));
