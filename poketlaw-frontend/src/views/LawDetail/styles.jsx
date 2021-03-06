import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    display: 'flex',
    backgroundColor: '#eff5f8',
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexDirection: 'column',
    padding: '3rem 4rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  lawsContainer:{
    height: '10rem',
  },
  questionContainer: {
    paddingTop: theme.spacing(5),
    width: '100%',
  },
  lawsQuestionContainer: {
    height: '3rem',
    margin: '1rem',
    width: '100%',
  },
  accordion: {
    width: '100%',
  }
}));
