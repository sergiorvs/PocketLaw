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
    // flexDirection: 'column',
    padding: '2rem 4rem',
    margin: '1rem 0 2rem',
    [theme.breakpoints.down('md')]: {
      // flexDirection: 'column-reverse',
      padding: '1rem 1rem',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
      padding: '1rem 1rem',
    },
  },
  circleContainer: {
    position: 'relative',
    height: '35rem',
    width: '35rem',
    padding: '2.8em', /*= 2em * 1.4 (2em = half the width of an img, 1.4 = sqrt(2))*/
    borderRadius: '50%',
    margin: '1.75em auto 0',
    [theme.breakpoints.down('md')]: {
      margin: '2.75em auto',
      width: '32rem',
      height: '31rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
      height: '20rem',
      margin: '5em 3em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '14rem',
      height: '14rem',
      margin: '2.75em auto',
    },
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
    [theme.breakpoints.down('md')]: {
      width: '6em',
      height: '6em',
      margin: '-2em', /* 2em = 4em/2 */ /* half the width */
    },
    [theme.breakpoints.down('sm')]: {
      width: '6em',
      height: '6em',
      margin: 0, /* 2em = 4em/2 */ /* half the width */
    },
    [theme.breakpoints.down('xs')]: {
      width: '4em',
      height: '4em',
      margin: '-2em', /* 2em = 4em/2 */ /* half the width */
    },
  },
  deg0: {
    transform: 'translate(18em)',
    [theme.breakpoints.down('md')]: {
      transform: 'translate(13em)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(13em)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(7em)',
    },
  }, /* 12em = half the width of the wrapper */
  deg25: {
    transform: 'rotate(90deg) translate(18em) rotate(-90deg)',
    [theme.breakpoints.down('md')]: {
      transform: 'rotate(90deg) translate(13em) rotate(-90deg)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'rotate(90deg) translate(13em) rotate(-90deg)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'rotate(90deg) translate(7em) rotate(-90deg)',
    },
  },
  deg90: {
    transform: 'rotate(-90deg) translate(18em) rotate(90deg)',
    [theme.breakpoints.down('md')]: {
      transform: 'rotate(-90deg) translate(13em) rotate(90deg)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'rotate(-90deg) translate(13em) rotate(90deg)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'rotate(-90deg) translate(7em) rotate(90deg)',
    },
  },
  deg45: {
    transform: 'rotate(45deg) translate(18em) rotate(-45deg)',
    [theme.breakpoints.down('md')]: {
      transform: 'rotate(45deg) translate(13em) rotate(-45deg)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'rotate(45deg) translate(13em) rotate(-45deg)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'rotate(45deg) translate(7em) rotate(-45deg)',
    },
  },
  deg135: {
    transform: 'rotate(135deg) translate(18em) rotate(-135deg)',
    [theme.breakpoints.down('md')]: {
      transform: 'rotate(135deg) translate(13em) rotate(-135deg)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'rotate(135deg) translate(13em) rotate(-135deg)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'rotate(135deg) translate(7em) rotate(-135deg)',
    },
  },
  deg180: {
    transform: 'translate(-18em)',
    [theme.breakpoints.down('md')]: {
      transform: 'translate(-13em)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(-13em)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(-7em)',
    },
  },
  deg225: {
    transform: 'rotate(225deg) translate(18em) rotate(-225deg)',
    [theme.breakpoints.down('md')]: {
      transform: 'rotate(225deg) translate(13em) rotate(-225deg)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'rotate(225deg) translate(13em) rotate(-225deg)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'rotate(225deg) translate(7em) rotate(-225deg)',
    },
  },
  deg315: {
    transform: 'rotate(315deg) translate(18em) rotate(-315deg)',
    [theme.breakpoints.down('md')]: {
      transform: 'rotate(315deg) translate(13em) rotate(-315deg)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'rotate(315deg) translate(13em) rotate(-315deg)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'rotate(315deg) translate(7em) rotate(-315deg)',
    },
  },
  logoContainer: {
    width: '27rem',
    height: '27rem',
    position: 'absolute',
    top: '12%',
    left: '12%',
    [theme.breakpoints.down('md')]: {
      top: '14%',
      left: '25%',
      width: '19rem',
      height: '24rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
      height: '20rem',
      top: '13%',
      left: '14%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '10rem',
      height: '10rem',
      top: '14%',
      left: '15%',
    },
  },
  backgroundContainer: {
    position: 'absolute',
    // top: '-27%',
    // left: '-63%',
    // width: '80rem',
    // height: '55rem',
    top: '0%',
    left: '-3%',
    width: '115%',
    height: '101%',
    [theme.breakpoints.down('md')]: {
      top: '9%',
      left: '8%',
      width: '92%',
      height: '86%'
    },
    [theme.breakpoints.down('sm')]: {
      top: '1%',
      left: '0%',
      width: '143%',
      height: '131%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '115%',
      height: '101%',
      top: '4%',
      left: '-4%',
    }
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
    [theme.breakpoints.down('md')]: {
      width: '50%',
      margin: 0,
      marginBottom: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '60%',
      margin: 0,
      marginBottom: '1rem',
      marginTop: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: 0,
      marginBottom: '1rem',
      marginLeft: '-3rem',
    }
  }
}));
