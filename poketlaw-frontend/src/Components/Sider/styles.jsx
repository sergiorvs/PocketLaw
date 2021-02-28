import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';


export const useStyles = makeStyles(theme => ({
  siderContainer: {
    width: '100%',
    height: '100%',
    padding: '2rem',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  siderMenu: {
    margin: 'auto',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.general.main,
  },
  siderMenuDrawer: {
    width: 'min-content',
    backgroundColor: theme.palette.general.main,
  },
  subheader: {
    backgroundColor: theme.palette.general.main,
    padding: 0,
    color: 'black',
  },
  activeItem: {
    backgroundColor: '#87ABF7 !important',
    width: '100%',
  },
  icon: {
    width: 20,
    height: 20,
    color: 'black',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden'
    },
  },
  homeText: {
    fontWeight: 'bold',
    paddingBottom: '.3rem',
  },
  nested: {
    paddingLeft: '1.5rem',
    backgroundColor: theme.palette.general.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.general.main, 0.5),
    },
  },
  itemList: {
    width: '100%',
    borderRadius: 30,
    height: '3rem',
    margin: '1rem 0',
    backgroundColor: theme.palette.general.light,
    '&:hover': {
      backgroundColor: fade(theme.palette.general.light, 0.8),
    },
  },
  farmTextContainer: {
    padding: '1rem 0',
  },
  farmItem: {
    color: 'inherit',
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.general.main,
    },
  },
  farmText: {
    color: 'inherit',
    fontSize: '17px !important',
    fontWeight: '600',
    '&:hover': {
      color: 'inherit',
    },
  },
  activeBarnText: {
    fontSize: '13px !important',
    color: 'inherit',
    padding: 0,
  },
  activeSubItem: {
    fontWeight: 'bold',
  },
  menuDrawer: {
    display: 'flex',
    backgroundColor: 'red'
  }
}));
