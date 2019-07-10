import React from 'react';
import { StatusState } from '../../models/Request';

const statusContext = React.createContext<StatusState>({
  statuses: [],
  getStatuses: (): void => {}
});

export default statusContext;
