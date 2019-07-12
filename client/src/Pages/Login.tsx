import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import React, { Fragment, useEffect, useState, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import { AuthContext } from '../context/auth/AuthContext';

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
  const { loginUser } = useContext(AuthContext);

  const [state, setstate] = useState({
    email_address: '',
    password: ''
  });

  useEffect(() => {
    loginUser(state);

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
