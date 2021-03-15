import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    display: 'flex',
    backgroundColor: '#eff5f8',
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '5rem 4rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  circleContainer: {
    position: 'relative',
    height: '35rem',
    width: '35rem',
    padding: '2.8em', /*= 2em * 1.4 (2em = half the width of an img, 1.4 = sqrt(2))*/
    borderRadius: '50%',
    margin: '1.75em auto 0',
  },
  item: {
    backgroundColor: '#D5D5D5',
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '8em',
    height: '8em',
    margin: '-4em', /* 2em = 4em/2 */ /* half the width */
    display: 'flex',
    '&:hover': {
      backgroundColor: fade('#BAB4E2', 0.5),
    },
  },
  deg0: {transform: 'translate(18em)',}, /* 12em = half the width of the wrapper */
  deg25: {transform: 'rotate(90deg) translate(18em) rotate(-90deg)',},
  deg90: {transform: 'rotate(-90deg) translate(18em) rotate(90deg)',},
  deg45: {transform: 'rotate(45deg) translate(18em) rotate(-45deg)',},
  deg135: {transform: 'rotate(135deg) translate(18em) rotate(-135deg)',},
  deg180: {transform: 'translate(-18em)',},
  deg225: {transform: 'rotate(225deg) translate(18em) rotate(-225deg)',},
  deg315: {transform: 'rotate(315deg) translate(18em) rotate(-315deg)',},
  logoContainer: {
    width: '27rem',
    height: '27rem',
    position: 'absolute',
    top: '12%',
    left: '12%',
  },
  backgroundContainer: {
    position: 'absolute',
    top: '-27%',
    left: '-63%',
    width: '80rem',
    height: '55rem',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  icon: {
    width: '80%',
    height: '80%',
    margin: 'auto'
  },
  people: {
    width: '165%',
    height: '130%',
    margin: '-7rem',
    marginBottom: 0,
    marginTop: 'auto',
  }
}));
