import React, { useReducer, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import AuthContextReducer from "./AuthContextReducer";
import { Request, User, Response } from "../../models";
import { useApi } from "../../hooks/useApi";
import { Auth } from '../../models';

const AuthContextState: React.FC = props => {
  const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyNjUwOTk4LCJleHAiOjE1NjI2ODY5OTh9.Nlr9P1IYa2B8RGAN0TBHWXzAaeRBTgpg9DgkZiz4mj4";

  const { results, isLoading, isError } = useApi<Request<null>, User>(
    {
      url: "/api/user",
      method: "GET",
      token
    }
  );
  //console.log('results',results);

  // const userObject: User | null = results ? results!.data : null; 
  //const userObject: Response<User> = results;  // 



  const authenticated: boolean = true;

  var initialState: Auth = {token:'',authenticated: false,data: null};

  if(results){

     initialState = {
      token,
      authenticated,
      data: results
    };

    

  

  }

  const [state, dispatch] = useReducer(AuthContextReducer, initialState);
  dispatch({type: 'test'});
  
  setInterval(() => {
    console.log('initialState', initialState);
    console.log('state', state)
  }, 5000)
  
  

  return (
    <AuthContext.Provider
      value={{
        token,
        authenticated,
       data: results!
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextState;
