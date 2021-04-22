import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#eff5f8',
    width: '100%',
    height: '100%',
    padding: '2rem 4rem',
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 1rem',
    }
  },
  carousel: {
    display: 'flex',
    alignContent: 'center'
  }
}));
