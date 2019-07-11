import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import LoginForm from '../components/LoginForm';

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
            <LoginForm />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Login;
