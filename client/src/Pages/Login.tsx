import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';

/*const useStyles = makeStyles((theme: Theme) =>
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
);*/

/*interface Respon {
  token: string | null;
}*/
//interface
const Login: React.FC<RouteComponentProps> = ({ history }) => {
  //const classes = useStyles();
  //const { authenticated } = useContext(AuthContext);

  const [state, setstate] = useState({
    email_address: '',
    password: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('/api/auth', {
        email_address: state.email_address,
        password: state.password
      });

      const data: {
        token: string;
        authenticated: boolean;
      } = await response.data;
      const { token } = data;
      localStorage.setItem('auth-token', token);
      history.push('/');
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, [state]);

  return (
    <Fragment>
      <Grid item sm={5}>
        <Paper>
          <LoginForm
            onSubmit={({ email, password }) =>
              setstate({ email_address: email, password })
            }
          />
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default Login;
