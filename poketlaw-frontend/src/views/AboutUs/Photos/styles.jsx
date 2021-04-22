import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    display: 'flex',
    backgroundColor: '#eff5f8',
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // flexDirection: 'column',
    padding: '2rem 4rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      padding: '1rem 1rem',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
      padding: '1rem 1rem',
    },
  },
  avatar: {
    width: '15rem',
    height: '15rem'
  },
  icon: {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    borderRadius: 25,
    borderWidth: 2,
    width: '3rem',
    height: '3rem',
    background: 'white'
  }
}));
