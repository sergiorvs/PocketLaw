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
  },
  imageLaw: {
    background: 'transparent',
    width: 'fit-content',
    height: '100%',
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
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '1px',
      margin: '3rem 0',
    }
  },
  descriptionLaw: {
    marginLeft: '7px',
    height: '100%',
    overflow: 'auto',
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
