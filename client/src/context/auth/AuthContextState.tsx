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
import { getRequestToken, setRequestToken } from '../auth/functions';
import { AuthContext } from './AuthContext';
import { myReducer } from './AuthContextReducer';

const AuthContextState: React.FC = props => {
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
    } catch (error) {
      console.log('error2', error);
    }
  };

  const initialState: Auth = {
    user: { email_address: '', user_name: '' },
    authenticated: false,
    loading: false,
    errors: false,
    loadUser: loginUser,
    loadUserData: loadUserData
  };

  const [state, dispatch] = useReducer(myReducer, initialState);

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
        loadUser: state.loadUser,
        loadUserData: state.loadUserData
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextState;
