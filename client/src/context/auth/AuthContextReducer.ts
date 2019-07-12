import { Auth, Action, ActionTypes, AuthStatusPayload } from "../../models";

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

export const myReducer = <T>(initStateData: Auth, action: Action<T>) => {

  switch (action.type) {

    case ActionTypes.CHECK_AUTH:
      return checkStatus(initStateData, action.payload);
    
      case ActionTypes.LOAD_USER_DATA:
          return {
            ...initStateData,
            //user: action.payload,
            authenticated: true,
            loading: false,
            errors: false
          };

    default:
      return initStateData;
  }

};
