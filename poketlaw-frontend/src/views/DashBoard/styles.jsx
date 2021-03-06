import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    display: 'flex',
    backgroundColor: '#eff5f8',
    width: '100%',
    minHeight: '100%',
    flexGrow: 2,
    alignContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  headerContainer: {
    background: 'linear-gradient(90deg, rgba(82,153,235,1) 0%, rgba(88,127,235,1) 100%);',
    width: '100%',
    maxHeight: '12vh',
    padding: '1rem',
    alignContent: 'center',
  },
  lawsContainer:{
    height: '100%',
  },
  lawsDescriptionContainer: {
    padding: '2rem 3rem',
    margin: 'auto',
    justifyContent: 'center',
  },
}));
