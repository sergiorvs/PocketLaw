import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    display: 'flex',
    backgroundColor: '#eff5f8',
    width: '100%',
    minHeight: '100%',
    alignItems: 'center',
    // flexDirection: 'column',
    padding: '2rem 4rem',
    [theme.breakpoints.down('md')]: {
      padding: '1rem 1rem',
    },
  },
  avatar: {
    width: '15rem',
    height: '15rem',
    boxShadow: '0 0 10px  rgba(0,0,0,0.6)',
  },
  icon: {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    borderRadius: 25,
    borderWidth: 2,
    width: '3rem',
    height: '3rem',
    padding: '.5rem',
    background: 'white',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: fade('#BAB4E2', 0.9),
    },
  },
  logoContainer: {
    margin: '1rem'
  },
  title: {
    maxWidth: '13rem',
    margin: 'auto',
    paddingTop: '1.5rem',
    color: theme.palette.secondary.dark,
  },
  subtitle: {
    maxWidth: '13rem',
    margin: 'auto',
    paddingTop: '0.5rem',
    lineHeight: '1em',
    fontSize: '18px',
  },
  description: {
    maxWidth: '13rem',
    margin: 'auto',
    paddingTop: '0.5rem'
  }
}));
