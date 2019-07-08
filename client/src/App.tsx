import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context';
import Home from './Pages/Home';
import { useApi } from './hooks/';
import { Auth, Request } from './models/';

const App: React.FC = () => {
  const [userDetails, setUserDetails] = useState();
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyNTYyNzA3LCJleHAiOjE1NjI1OTg3MDd9.v21ZfR-xIpN9ncxhULmsuTLDVqyaPxTubXDNN11LyQo';

  const { data, isLoading, isError } = useApi<Request<null>, Auth>({
    method: 'GET',
    url: '/api/user',
    token
  });

  useEffect(() => {
    if (data) {
      setUserDetails(data);
    }
  }, [data]);

  return (
    <AuthContext.Provider value={{ token, userDetails }}>
      <Home />
    </AuthContext.Provider>
  );
};

export default App;
