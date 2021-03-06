import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@material-ui/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';


const propTypes = {
  setLoginState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};


function Modal({type, message, setErrorSubmit, title}) {
  const classes = useStyles();
  const {t} = useTranslation();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setErrorSubmit(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{paper: classes.paper}}
    >
      <DialogTitle id="alert-dialog-title" className={classes.alertDialogTitle}>
        <div
          className={type === 'success' ? classes.alertDialogTextTitleOk : classes.alertDialogTextTitle}>
          {type === 'success' ? title : t('alert')}
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" className={classes.alertDialogDescription}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.aceptBtn}>
        <Button onClick={handleClose} className={classes.aceptTextBtn}>
          {t('accept')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

Modal.propTypes = propTypes;

export default Modal;
