import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    display: 'flex',
    backgroundColor: '#eff5f8',
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem',
    height: '100%',
  },
  container: {
    display: 'flex',
    backgroundColor: 'white',
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '5rem 4rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      padding: '1rem 1rem',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
      padding: '1rem 1rem',
    },
  },
  img: {
    objectFit: 'contain',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  imgContainer: {
    textAlign: 'center',
    padding: '1rem'
  },
  imgContainerBtn: {
    textAlign: 'center',
    marginTop: '2rem'
  },
  gridContainer: {
    background: 'radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(219,243,243,1) 51%, rgba(168,226,227,1) 88%)',
    padding: '1rem 2rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
    }
  },
  amigraTitle: {
    order: 0,
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
      order: 1,
    }
  },
  amigra: {

  },
  amigraLineHeight: {
    lineHeight: '1.7em',
  },
  amigraText: {
    background: 'radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(219,243,243,1) 51%, rgba(168,226,227,1) 88%)',
  }
}));
