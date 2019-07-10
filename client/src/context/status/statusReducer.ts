import React from 'react';
import { StatusState, Action, Status } from '../../models/Request';
import { ActionTypes } from '../../models/actionTypes';

const statusReducer = <Status>(
  initialState: StatusState,
  action: Action<Status>
): StatusState => {
  switch (action.type) {
    case ActionTypes.GET_STATUSES:
      return {
        ...initialState,
        statuses: action.payload
      };
    default:
      return initialState;
  }
};

export default statusReducer;
