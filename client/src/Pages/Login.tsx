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

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import officeImage from '../static/images/alex.jpg';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { loginUser, authenticated } = useContext(AuthContext);

  const [dynamicImage, setDynamicImage] = useState('url(' + officeImage + ')');

  const images = [
    'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/31961347_1821569647908955_8420909169132961792_o.jpg?_nc_cat=109&_nc_oc=AQnDduAzGXZ5nqrfT1irUi0Y0v01K2NGm2l1pS9QEAzJAQRTWvFCaG8PSDhJhvHT_MbwM1QNs-gCh1RwfCUG-Twq&_nc_ht=scontent-lhr3-1.xx&oh=541d8f2ce0b95869d36d41e02cd97b61&oe=5DDC5331',
    'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/14390841_1169764959756097_8813833317370157847_n.jpg?_nc_cat=111&_nc_oc=AQmaSWMQ8t3wBzlD0f7gz22LFKRaOHG3GpSLt1tFoGiBr_ezZrL8sLoKH1EgDpn3rGeffeRSGJ2tXVtrtrpyIep3&_nc_ht=scontent-lhr3-1.xx&oh=c86ffb07470539ca76405144b8118a89&oe=5DA2E127',
    'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/324393_455854547813812_1027931439_o.jpg?_nc_cat=111&_nc_oc=AQkNMYwzYIhC8tKer8FrlHGnVPx0diEUxI87VeQMUTPlUN0cl64pI2H9PMstXZ9sV0ftVcjhV5N0QAlsdoz54nIs&_nc_ht=scontent-lhr3-1.xx&oh=19a4c45617c9deb4f705796004d0cad3&oe=5DD5FA49',
    'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/16178988_1301972853201973_7079846101165911796_o.jpg?_nc_cat=104&_nc_oc=AQnudHCysXSztRMQpX1TLS9OfB-oHazUkKYTjwEWVi_U3ly7i7_H2-NEq4vStW5zaouaOMYktjlfJZ4gE-Hv2Zsp&_nc_ht=scontent-lhr3-1.xx&oh=3f4abe766993b8c379954c9b7f91a707&oe=5DD4F320',
    'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/14066433_1142191769180083_3656701026664432767_o.jpg?_nc_cat=110&_nc_oc=AQlC5Kg3rQvkuBuvcm4wTpRFnogN6qOCld0N8LoxTtr3_zWFZ_PxhjZZ0YyO4T-Vl1JJuAfnn27zQmAUneLus91X&_nc_ht=scontent-lhr3-1.xx&oh=238fb4b56f63703cf459c7416048e774&oe=5DE78756',
    'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/995555_567804409981150_1107203167_n.jpg?_nc_cat=109&_nc_oc=AQnaVn-2MSIABZiL5xmZq3D9AcEU2ReqqA8lkAyER5nyS7vuvihMd7iQkkV6-2xPGyzcd6U6LgAoD103k0tY8jw4&_nc_ht=scontent-lhr3-1.xx&oh=bf34a249955688abfbeab33fb320137b&oe=5DD67D61'
  ];

  setInterval(() => {
    let currentIndex = Math.floor(Math.random() * images.length + 1);
    console.log('currentIndex', currentIndex);
    setDynamicImage('url(' + images[currentIndex] + ')');
  }, 600000);

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
        backgroundImage: `${dynamicImage}`,
        minHeight: '100vh',
        backgroundSize: 'cover'
      },
      button: {
        margin: theme.spacing(1)
      }
    })
  );

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
