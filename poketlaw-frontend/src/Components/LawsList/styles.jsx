import { makeStyles } from '@material-ui/core';


export const useStyles = makeStyles(theme => ({
  lawsDescription: {
    width: '100%',
    minHeight: '7rem',
    marginBottom: '3rem',
    cursor: 'pointer',
  },
  imageLaw: {
    background: 'yellow',
    width: 'fit-content',
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
    maxHeight: '100%',
  },
  icon: {
    cursor: 'pointer',
  },
  disabled: {
    pointerEvents: 'none',
    opacity: .5
  }
}));
