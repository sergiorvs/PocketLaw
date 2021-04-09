import { makeStyles } from '@material-ui/core';


export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    display: 'flex',
    height: '100%',
  },
  lawsDescription: {
    width: '100%',
    height: '10rem',
    marginBottom: '3rem',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: '20rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '30rem',
    },
  },
  imageLaw: {
    background: 'transparent',
    width: 'fit-content',
    height: '100%',
    maxHeight: '9rem'
  },
  lawImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    // background: 'red',
    lineHeight: '40px',
    letterSpacing: '1px',
    padding: '0 1rem',
    width: 'max-content'
  },
  lawTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  lawExtras: {
    margin: 0,
    height: 'fit-content'
  },
  divider: {
    background: '#000',
    marginRight: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '1px',
      height: '100%',
      // display: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '1px',
      margin: '3rem 0',
      display: 'none'
    }
  },
  descriptionLaw: {
    marginLeft: '7px',
    height: '100%',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem'
    },
  },
  icon: {
    cursor: 'pointer',
  },
  disabled: {
    pointerEvents: 'none',
    opacity: .5
  },
  lawTag: {
    color: theme.palette.general.contrastText,
  }
}));
