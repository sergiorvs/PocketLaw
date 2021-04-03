import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const useStyles = makeStyles(theme => ({
  wrapperContent: {
    backgroundColor: '#eff5f8',
    borderRadius: '0 19px 19px 19px',
    alignContent: 'flex-start',
  },
  wrapper: {
    height: '100vh',
    width: '100%'
  },
  container: {
    flex: 1,
    height: '100%',
  },
  siderBackground: {
    backgroundColor: theme.palette.general.main,
    // maxHeight: '100%',
    flex: 1
  },
  siderHeader: {
    padding: '1rem',
  },
  title: {
    fontSize: '17px',
  },
  subtitle: {
    fontSize: '6px',
    color: theme.palette.general.main,
    marginBottom: '1rem',
  },
  logoContainer: {
    textAlign: 'center',
    padding: theme.spacing(3)
  },
  logo: {
    width: '70px',
    height: '70px',
    backgroundColor: theme.palette.primary.main,
    margin: 'auto',
  },
  divider: {
    width: '100%',
    height: '.5px',
    backgroundColor: theme.palette.primary.main,
  },
  menuList: {
    color: theme.palette.secondary.light,
  },
  avatar: {
    width: '100%',
    height: '7rem',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  logout: {
    cursor: 'pointer',
  },
  logoutContainer: {
    marginTop: 'auto',
    marginBottom: '2rem'
  },
  changePhoto: {
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: '.5rem',
    border: `2px solid ${theme.palette.general.light}`,
    cursor: 'pointer',
  },
  input: {
    display: 'none',
  },
  button: {
    width: '100%',
    borderRadius: 30,
    height: '3rem',
    margin: '.5rem 0',
    textTransform: 'none',
    backgroundColor: theme.palette.general.light,
    border: `1px solid ${theme.palette.banner.background}`,
    fontSize: 17,
    '&:hover': {
      backgroundColor: fade(theme.palette.general.light, 0.8),
    },
  },
  buttonContainer: {
    padding: '1rem 2rem',
  },
  content: {
    maxHeight: '100%',
    height: '100%',
    background: '#eff5f8'
  }
}));
