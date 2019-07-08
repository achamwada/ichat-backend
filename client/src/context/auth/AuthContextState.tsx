import React, { useReducer, useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import AuthContextReducer from './AuthContextReducer';
import { Request, User } from '../../models';
import {useApi} from '../../hooks/useApi';


const AuthContextState: React.FC = props => {



  const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyNTYyNzA3LCJleHAiOjE1NjI1OTg3MDd9.v21ZfR-xIpN9ncxhULmsuTLDVqyaPxTubXDNN11LyQo';
  
  
  const { results, isLoading, isError } = useApi<Request<null>, User>({
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
