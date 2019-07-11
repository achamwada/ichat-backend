import React, { Fragment, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/auth/AuthContext';
import { Redirect } from 'react-router-dom';

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
  //const { authenticated } = useContext(AuthContext);
  // console.log('match', match);
  return (
    <Fragment>
      <Grid container direction="row" alignContent="center" spacing={3}>
        <Grid item sm={8}>
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
