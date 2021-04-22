import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    display: 'flex',
    backgroundColor: '#eff5f8',
    width: '100%',
    // minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexDirection: 'column',
    padding: '3rem 4rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
      padding: '2rem 1rem',
    },
  },
  goBackButton: {
    cursor: 'pointer',
  },
  questionContainer: {
    paddingTop: theme.spacing(5),
    width: '100%',
    marginRight: '0 !important',
    marginLeft: 'auto !important',
  },
  heading:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
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
    background: `${theme.palette.ternary.neutral} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.ternary.neutral} !important`,
      opacity: '0.65'
    },
  },
  simpleAnswerFabPositive: {
    background: `${theme.palette.ternary.positive} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.ternary.positive} !important`,
      opacity: '0.65'
    },
  },
  simpleAnswerFabNegative: {
    background: `${theme.palette.ternary.bad} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.ternary.bad} !important`,
      opacity: '0.65'
    },
  },
}));
