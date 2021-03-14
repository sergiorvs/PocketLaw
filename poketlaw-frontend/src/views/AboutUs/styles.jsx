import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    display: 'flex',
    backgroundColor: '#eff5f8',
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '3rem 4rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  circleContainer: {
    position: 'relative',
    height: '35rem',
    width: '35rem',
    padding: '2.8em', /*= 2em * 1.4 (2em = half the width of an img, 1.4 = sqrt(2))*/
    border: 'dashed 1px',
    borderRadius: '50%',
    margin: '1.75em auto 0',
  },
  item: {
    backgroundColor: '#BAB4E2',
    borderRadius: '50%',
    display: 'block',
    overflow: 'hidden',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '8em',
    height: '8em',
    margin: '-4em', /* 2em = 4em/2 */ /* half the width */
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
    width: '21rem',
    height: '7rem',
    position: 'absolute',
    top: '38%',
    left: '21%',
  }
}));
