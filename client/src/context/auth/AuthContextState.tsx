import React, { useReducer, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import AuthContextReducer from "./AuthContextReducer";
import { Request, User, Response } from "../../models";
import { useApi } from "../../hooks/useApi";
import { Auth } from '../../models';

const AuthContextState: React.FC = props => {
  const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyNjUwOTk4LCJleHAiOjE1NjI2ODY5OTh9.Nlr9P1IYa2B8RGAN0TBHWXzAaeRBTgpg9DgkZiz4mj4";

  const { results, isLoading, isError } = useApi<Request<null>, Response<User>>(
    {
      url: "/api/user",
      method: "GET",
      token
    }
  );
  console.log('results',results);

  // const userObject: User | null = results ? results!.data : null; 
  //const userObject: Response<User> = results;  // 



  const authenticated: boolean = true;
  const initialState = {
    token,
    authenticated,
    data: results
  };
  console.log('initialState', initialState);

  const [state, dispatch] = useReducer(AuthContextReducer, initialState);

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
