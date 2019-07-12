import { Action, ActionTypes, Auth, AuthStatusPayload, User } from "../../models";

const checkStatus = (initialState: Auth, payload: AuthStatusPayload) => {

  const authenticated: boolean = true;
  if (payload.data) {

    return {
      ...initialState,
      token: payload.token,
      authenticated,
      data: payload.data
    };
  }

  return initialState;


}

const loadUserData = (initialState: Auth, payload: User) =>{

  return {
    ...initialState,
    user: payload,
    authenticated: true,
    loading: false,
    errors: false
  };

}


const LoginUser = (initialState: Auth) =>{

  return {
    ...initialState,
    authenticated: true,
    loading: false,
    errors: false
  };

}

export const authContextReducer = <T>(initStateData: Auth, action: Action<T>) => {

  switch (action.type) {

    case ActionTypes.CHECK_AUTH:
      return checkStatus(initStateData, action.payload);
    
    case ActionTypes.LOAD_USER_DATA:
          return loadUserData(initStateData, action.payload);
    case ActionTypes.LOGIN: 
          return LoginUser(initStateData)

    default:
      return initStateData;
  }

};
