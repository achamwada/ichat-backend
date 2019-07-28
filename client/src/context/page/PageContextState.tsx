import React, { useReducer } from 'react';
import PageContext from './PageContext';
import { Page, Action, PageDetails } from '../../models/Request';
import pageContextReducer from './pageContextReducer';

const PageContextState: React.FC = props => {
  const setPage = (pageInfo: PageDetails) => {
    const action: Action<Page> = {
      type: 'LOAD_PAGE',
      payload: pageInfo
    };
    dispatch(action);
  };

  const initialState: Page = {
    details: null,
    setPage
  };

  const [pageState, dispatch] = useReducer(pageContextReducer, initialState);

  return (
    <PageContext.Provider
      value={{
        details: pageState.details,
        setPage: pageState.setPage
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextState;
