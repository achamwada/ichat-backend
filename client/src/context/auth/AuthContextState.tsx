import React, { useReducer, useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import AuthContextReducer from './AuthContextReducer';
import { Request, User, Response } from '../../models';
import {useApi} from '../../hooks/useApi';


const AuthContextState: React.FC = props => {



  const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyNjA2MTE3LCJleHAiOjE1NjI2NDIxMTd9.KeRgm91qaf_a-HXU73RHw36TXfGCTboG2vLYTXXTshw';
  
  
  const { results, isLoading, isError } = useApi<Request<null>, Response<User>>({
      url: '/api/user',
      method: 'GET',
      token
  });
  
  const initialState = {
    token,
    ...results  
  };

  //const [state, dispatch] = useReducer(AuthContextReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        ...initialState
      }}
    >
        {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextState;
