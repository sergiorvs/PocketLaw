import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  wrapperContent: {
    backgroundColor: '#eff5f8',
    borderRadius: '0 19px 19px 19px',
  },
  siderBackground: {
    backgroundColor: theme.palette.general.main,
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
    height: '100%',
  },
  logout: {
    cursor: 'pointer',
  },
  logoutContainer: {
    marginTop: 'auto',
    marginBottom: '2rem'
  }
}));
