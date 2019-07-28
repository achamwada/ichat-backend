import React, { createContext } from 'react';
import { Page, PageDetails } from '../../models/Request';

const PageContext = createContext<Page>({
  details: null,
  setPage: (pageDetails: PageDetails) => {}
});

export default PageContext;
