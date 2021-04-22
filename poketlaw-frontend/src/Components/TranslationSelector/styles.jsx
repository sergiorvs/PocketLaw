import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';


export const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.primary.light,
    borderRadius: 25,
    border: `1px solid ${theme.palette.grey}`,
    marginLeft: theme.spacing(3),
    width: '10rem',
  },
  item: {
    textAlign: 'center',
    padding: '1rem 0',
    cursor: 'pointer',
    width: '49.5%',
    color: 'black',
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.dark, 0.5),
      borderTopLeftRadius: 'inherit',
      borderBottomLeftRadius: 'inherit',
    },
  },
  itemB: {
    width: '49.5%',
    textAlign: 'center',
    padding: '1rem 0',
    cursor: 'pointer',
    color: 'black',
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.dark, 0.5),
      borderTopRightRadius: 'inherit',
      borderBottomRightRadius: 'inherit',
    },
  },
  active: {
    backgroundColor: fade(theme.palette.secondary.dark, 0.4),
    borderTopLeftRadius: 'inherit',
    borderBottomLeftRadius: 'inherit',
  },
  activeB: {
    backgroundColor: fade(theme.palette.secondary.dark, 0.4),
    borderTopRightRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
  },
  divider: {
    width: 1,
    height: '100%',
    // margin: 'auto',
  },
  icon: {
    width: 15,
    height: 15,
  }
}));
