import axios from 'axios';
import React, { useReducer, useEffect } from 'react';
import {
  Action,
  ActionTypes,
  Auth,
  LoginUser,
  User,
  UserAuthenticated
} from '../../models';
import { setRequestToken } from '../auth/functions';
import { AuthContext } from './AuthContext';
import { authContextReducer } from './AuthContextReducer';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const AuthContextState: React.FC<RouteComponentProps> = props => {
  const loginUser = async (formData: LoginUser) => {
    try {
      const response = await axios.post('/api/auth', {
        email_address: formData.email_address,
        password: formData.password
      });

      const data: UserAuthenticated = await response.data;
      const { token } = data;
      localStorage.setItem('auth-token', token);
      dispatch({ type: ActionTypes.LOGIN, payload: null });
      props.history.push('/');
    } catch (error) {
      console.log('error', error);
    }
  };

  const loadUserData = async () => {
    try {
      setRequestToken();
      const rawData = await axios.get('/api/user');
      const userData: { user: User } = await rawData.data;

      let LoadUserAction: Action<User> = {
        type: ActionTypes.LOAD_USER_DATA,
        payload: userData.user
      };

      dispatch(LoadUserAction);
    } catch (error) {
      console.log('error2', error);
    }
  };

  const initialState: Auth = {
    user: { email_address: '', user_name: '' },
    authenticated: false,
    loading: false,
    errors: false,
    loginUser: loginUser,
    loadUserData: loadUserData
  };
  console.log('initialState', initialState);

  const [state, dispatch] = useReducer(authContextReducer, initialState);

      dispatch(LoadUserAction);
    } catch (error) {
      console.log('error2', error);
    }
  };

  const initialState: Auth = {
    user: { email_address: '', user_name: '' },
    authenticated: false,
    loading: false,
    errors: false,
    loginUser: loginUser,
    loadUserData: loadUserData
  };

  const [state, dispatch] = useReducer(authContextReducer, initialState);

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        authenticated: state.authenticated,
        loading: state.loading,
        errors: state.errors,
        loginUser: state.loginUser,
        loadUserData: state.loadUserData
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthContextState);
