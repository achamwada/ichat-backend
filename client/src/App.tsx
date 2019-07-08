import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AuthContextState from './context/auth/AuthContextState'

const App: React.FC = () => {

  return (
    <AuthContextState>
      <Home />
    </AuthContextState>
  );
};

export default App;
