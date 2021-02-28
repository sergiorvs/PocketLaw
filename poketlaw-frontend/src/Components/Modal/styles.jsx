import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  paper: {
    width: '280px',
    textAlign: 'center',
    borderRadius: '12px',
    background: 'rgba(248, 248, 248, 0.92)',
  },
  alertDialogTitle: {
    paddingBottom: 0,
  },
  alertDialogTextTitle: {
    color: 'red',
    paddingBottom: 0,
    fontSize: '28px'
  },
  alertDialogTextTitleOk: {
    color: 'green',
    paddingBottom: 0,
    fontSize: '28px'
  },
  alertDialogDescription: {
    fontSize: '14px',
    margin: 0,
  },
  aceptBtn: {
    textTransform: 'none',
    margin: 'auto',
    width: '100%',
    border: '1px rgba(0, 0, 0, 0.15) solid',
  },
  aceptTextBtn: {
    width: '100%',
    textTransform: 'none',
    color: theme.palette.modal.btn,
    fontSize: '18px',
    margin: 0,
    padding: 0,
  }
}));
