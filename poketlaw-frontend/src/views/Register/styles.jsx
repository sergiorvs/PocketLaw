import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles(theme => ({
  baseContainer: {
    backgroundImage: theme.palette.banner.background,
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: '4rem'
    },
  },
  divider: {
    background: theme.palette.primary.main,
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
  presentationContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  loginContainer: {
    // overflow: 'auto',
    // height: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  logoContainer: {
    alignSelf: 'center',
    paddingBottom: '1rem',
  },
  logo: {
    width: '70px',
    height: '90px',
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    lineHeight: '40px',
    letterSpacing: '1px',
  },
  subtitle: {
    fontSize: 13,
    color: theme.palette.primary.main,
    lineHeight: '15px',
  },
  description: {
    padding: '0 .5rem',
    paddingTop: '5rem',
  },
  marginBottom: {
    marginBottom: '1.7rem',
  },
  textField: {
    width: '100%',
    marginBottom: '1.5rem',
    background: 'transparent',
    borderBottomColor: theme.palette.primary.main,
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main,
    },
  },
  button: {
    width: '100%',
    fontSize: '18px',
    fontWeight: 'normal',
    textTransform: 'none',
    margin: '2rem 0',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.main,
  },
  link: {
    color: theme.palette.secondary.light,
    textDecoration: 'underline',
    lineHeight: '18px',
    cursor: 'pointer',
  },
  inputIcon: {
    marginRight: '.5rem',
  },
  resetPasswordContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  resetForm: {
    padding: '0 1.5rem',
  },
  resetDescription: {
    padding: '0 .5rem',
    paddingTop: '1.5rem',
  },
  root: {
    textAlign: 'left',
  },
  label: {
    color: theme.palette.primary.dark,
    paddingBottom: '.5rem'
  },
}));
