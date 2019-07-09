import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { myReducer } from './AuthContextReducer';
import { Request, User, ActionTypes } from '../../models';
import { useApi } from '../../hooks/useApi';
import { Auth } from '../../models';

const AuthContextState: React.FC = props => {
  const token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyNjg3MDk0LCJleHAiOjE1NjI3MjMwOTR9.Fa05cpUVXybcfpsc7NXl5TmU3eo0boSSypMKPccp-jc';

  const { results, isLoading, isError } = useApi<Request<null>, { user: User }>(
    {
      url: '/api/user',
      method: 'GET',
      token
    }
  );
  console.log('results in AuthContextState', results);

  var initialState: Auth = {
    token: '',
    authenticated: false,
    data: null,
    isLoading,
    isError
  };

  const [state, dispatch] = useReducer(myReducer, initialState);
  
  try {
    let resultsData: User | null = null;
    if (results && null !== results.user) {
      console.log('results in AuthContextState results!.user', results.user);
      resultsData = results.user;
    } else {
    }

    dispatch({
      type: ActionTypes.CHECK_AUTH,
      payload: {
        token,
        data: resultsData //{_id: "5d112f97ae436c07a7d976ae", user_name: "test", email_address: "SDGHDGH@gmail.com"}
      }
    });
  } catch (error) {
    console.log(error);
  }

 

  // const [state, dispatch] = useReducer(myReducer, initialState);
  //const allData = ...results;

  // useEffect(() => {
  //   console.log('results => ', results);
  //   dispatch({
  //     type: ActionTypes.CHECK_AUTH,
  //     payload: {
  //       token,
  //       data: resultsData //{_id: "5d112f97ae436c07a7d976ae", user_name: "test", email_address: "SDGHDGH@gmail.com"}
  //     }
  //   });
  // }, []);

  // console.log('state => ', state);
  // console.log('last resultsData', resultsData);

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
