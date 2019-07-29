import React from 'react';
import { Page, Action } from '../../models/Request';

const pageContextReducer = <T>(initialState: Page, action: Action<T>) => {
  switch (action.type) {
    case 'LOAD_PAGE':
      return {
        ...initialState,
        details: action.payload
      };
    default:
      return initialState;
  }
};

export default pageContextReducer;
