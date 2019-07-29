import React, { Fragment, useEffect, useState, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
import { AuthContext } from '../context/auth/AuthContext';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import officeImage from '../static/images/alex.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    },
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(5),
      margin: 'auto',
      marginTop: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      maxWidth: '80%'
    },
    leftPaper: {
      backgroundImage: 'url(' + officeImage + ')',
      minHeight: '100vh',
      backgroundSize: 'cover'
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { loginUser, authenticated } = useContext(AuthContext);

  const [state, setstate] = useState({
    email_address: '',
    password: ''
  });

  const [loginForm, displayLoginForm] = useState('block');
  const [signUpForm, displaySignUpForm] = useState('none');

  useEffect(() => {
    loginUser(state);
    if (authenticated) {
      window.location.href = '/';
    }

    // return () => {
    //   if (authenticated) {
    //     window.location.href = '/';
    //   }
    // };

    // eslint-disable-next-line
  }, [state]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid item md={6}>
          <Paper className={classes.leftPaper} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <div style={{ display: loginForm }}>
              <Typography variant="h2">Login</Typography>
              <LoginForm
                onSubmit={({ email, password }) =>
                  setstate({ email_address: email, password })
                }
                triggerSignUp={() => {
                  displayLoginForm('none');
                  displaySignUpForm('block');
                }}
              />
            </div>

            <div style={{ display: signUpForm }}>
              <Typography variant="h2">Sign Up</Typography>
              <RegisterForm
                onSubmit={({ email, password }) =>
                  setstate({ email_address: email, password })
                }
                triggerLogin={() => {
                  displaySignUpForm('none');
                  displayLoginForm('block');
                }}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
