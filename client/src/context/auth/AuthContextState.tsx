import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { myReducer } from './AuthContextReducer';
import { Request, User, ActionTypes } from '../../models';
import { useApi } from '../../hooks/useApi';
import { Auth, Action, AuthStatusPayload } from '../../models';

const AuthContextState: React.FC = props => {
  const token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyODc3NzQ3LCJleHAiOjE1NjI5MTM3NDd9.HQuRbHgbAY-I6RfMUW_aO7t90-V7MVwpKn_PLowfPI0';

  const { results, isLoading, isError } = useApi<Request<null>, { user: User }>(
    {
      url: '/api/user',
      method: 'GET',
      token
    }
  );

  const initialState: Auth = {
    token: '',
    authenticated: false,
    data: null,
    isLoading,
    isError
  };

  const [state, dispatch] = useReducer(myReducer, initialState);

  let resultsData: User | null = null;
  let dataIn: Action<AuthStatusPayload>;
  try {
    if (results && null !== results.user) {
      resultsData = results.user;
    }
  } catch (error) {
    console.log(error);
  }

  dataIn = {
    type: ActionTypes.CHECK_AUTH,
    payload: {
      token,
      data: resultsData
    }
  };

  useEffect(() => {
    dispatch(dataIn);
  }, [dataIn.payload.data]);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        data: state.data,
        isLoading: state.isLoading,
        isError: state.isError
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextState;
