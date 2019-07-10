import React, { useReducer } from 'react';
import statusContext from './statusContext';
import { StatusState, Status, Action } from '../../models/Request';
import { ActionTypes } from '../../models/actionTypes';
import statusReducer from './statusReducer';

const StatusContextState: React.FC = props => {
  const getStatuses = async () => {
    try {
      const rawReq = await fetch('/api/status');
      const { user_statuses } = await rawReq.json();
      const statuses: Array<Status> = user_statuses;
      console.log('statuses in getststuss',statuses)

      const reducerAction: Action<Array<Status>> = {
        type: ActionTypes.GET_STATUSES,
        payload: statuses
      };

      dispatch(reducerAction);
    } catch (error) {
      console.log('error in StatusContextState', error);
    }
  };

  const initialState: StatusState = {
    statuses: [],
    getStatuses
  };
  const [statusState, dispatch] = useReducer(statusReducer, initialState);
  return (
    <statusContext.Provider
      value={{
        statuses: statusState.statuses,
        getStatuses: statusState.getStatuses
      }}
    >
      {props.children}
    </statusContext.Provider>
  );
};

export default StatusContextState;
