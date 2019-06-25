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

export const myReducer = (initStateData: Auth, action: Action<AuthStatusPayload>) => {

  switch (action.type) {

    case ActionTypes.CHECK_AUTH:
      return checkStatus(initStateData, action.payload);

    default:
      return initStateData;
  }

};
