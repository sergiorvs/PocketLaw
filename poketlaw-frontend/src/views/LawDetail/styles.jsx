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
  goBackButton: {
    cursor: 'pointer',
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
    width: '100%',
  },
  accordion: {
    width: '100%',
    margin: '0.25rem',
  },
  simpleAnswerFab: {
    background: theme.palette.ternary.neutral,
    "&:hover": {
      backgroundColor: theme.palette.ternary.neutral,
      opacity: '0.65'
    },
  },
  simpleAnswerFabPositive: {
    background: theme.palette.ternary.positive,
    "&:hover": {
      backgroundColor: theme.palette.ternary.positive,
      opacity: '0.65'
    },
  },
  simpleAnswerFabNegative: {
    background: theme.palette.ternary.bad,
    "&:hover": {
      backgroundColor: theme.palette.ternary.bad,
      opacity: '0.65'
    },
  },
}));
