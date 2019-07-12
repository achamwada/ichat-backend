import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { myReducer } from './AuthContextReducer';
import {
  Request,
  User,
  ActionTypes,
  LoginUser,
  UserAuthenticated
} from '../../models';
import { useApi } from '../../hooks/useApi';
import { Auth, Action } from '../../models';
import { getRequestToken, setRequestToken } from '../auth/functions';
import axios from 'axios';

const AuthContextState: React.FC = props => {
  const token: string | null = getRequestToken();
  console.log('this token is', token);

  const loginUser = async (formData: LoginUser) => {
    try {
      const response = await axios.post('/api/auth', {
        email_address: formData.email_address,
        password: formData.password
      });

      const data: UserAuthenticated = await response.data;
      const { token } = data;
      localStorage.setItem('auth-token', token);
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

      console.log('data123', userData);
    } catch (error) {
      console.log('error2', error);
    }
  };
  loadUserData();

  const initialState: Auth = {
    authenticated: false,
    Loading: false,
    Errors: false,
    loadUser: loginUser,
    loadUserData: loadUserData
  };

  const [state, dispatch] = useReducer(myReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        authenticated: state.authenticated,
        Loading: state.Loading,
        Errors: state.Errors,
        loadUser: state.loadUser,
        loadUserData: state.loadUserData
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextState;
