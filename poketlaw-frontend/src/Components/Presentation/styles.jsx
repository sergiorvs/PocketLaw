import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  logoContainer: {
    alignSelf: 'center',
    paddingBottom: '1rem',
    cursor: 'pointer',
  },
  logo: {
    width: '70px',
    height: '90px',
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    lineHeight: '30px',
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
}));
