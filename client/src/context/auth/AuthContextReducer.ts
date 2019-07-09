import { User, Auth, Action, ActionTypes, Request, AuthStatusPayload } from "../../models";
import {useApi} from '../../hooks/useApi';

const checkStatus = (initialState: Auth, payload: AuthStatusPayload) => {

  const authenticated: boolean = true;

  if (payload.data) {
    return {
        ...initialState,
      token: payload.token,
      authenticated,
      data: payload.data//{_id: "5d112f97ae436c07a7d976ae", user_name: "ale", email_address: "alex@gmail.com", date_added: "2019-06-24T20:16:23.642Z", __v: 0}
    };
  }

  //console.log("payload.data", payload.data);

  //console.log("in checkStatus => ", initialState);

  return initialState;


}

export const myReducer = (initStateData: Auth, action: Action<AuthStatusPayload>) => {

    console.log("in reducer initState => ", initStateData);

  switch (action.type) {

    case ActionTypes.CHECK_AUTH:
      return checkStatus(initStateData, action.payload);

    default:
      return initStateData;
  }

};
