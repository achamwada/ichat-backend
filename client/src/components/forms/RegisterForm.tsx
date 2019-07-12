import React from 'react';
import Textfield from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: theme.spacing(3),
      margin: theme.spacing(3)
    },
    textField: {
      padding: theme.spacing(2)
    }
  })
);

const RegisterForm = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <form noValidate className={classes.container}>
        <FormControl fullWidth>
          <Textfield
            placeholder="Username"
            value=""
            className={classes.textField}
          />
          <Textfield
            placeholder="Email"
            value=""
            type="email"
            className={classes.textField}
          />
          <Textfield
            placeholder="Password"
            type="password"
            className={classes.textField}
          />
          <Textfield
            placeholder="Confirm password"
            type="password"
            className={classes.textField}
          />
          <Button variant="contained" color="secondary" value="Register">
            Register
          </Button>
        </FormControl>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
