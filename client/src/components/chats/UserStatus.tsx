import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { Fragment, useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    messageArea: {
      width: '100%',
      padding: theme.spacing(3),
      minHeight: theme.spacing(5)
    }
  })
);

/*interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}*/

const UserStatus: React.FC = props => {
  const classes = useStyles();

  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          variant="outlined"
          multiline
          rows="5"
          placeholder="How is your day Alex?"
          value={message}
          onClick={() => handleClickOpen()}
          className={classes.messageArea}
          margin="normal"
        />
      </form>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            multiline
            rows="3"
            margin="dense"
            value={message}
            label="Message..."
            fullWidth
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(evt)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Send
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default UserStatus;
