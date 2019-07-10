import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Textfield from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

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

const Login = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container direction="row" alignContent="center">
        <Grid item sm={8} spacing={3}>
          Left side
        </Grid>

        <Grid item sm={4}>
          <Paper>
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
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Login;
