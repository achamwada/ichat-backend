import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Home from './Pages/Home';
import Chats from './Pages/Chats';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Friends from './Pages/Friends';
import NotFoundPage from './Pages/NotFoundPage';
import AuthContextState from './context/auth/AuthContextState';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Login from './Pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <AuthContextState>
        <Header />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="baseline"
          style={{ padding: '5px', marginTop: '4em' }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={Chats} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/login" component={Login} />
            <Route exact path="*" component={NotFoundPage} />
          </Switch>
        </Grid>
        <Footer />
      </AuthContextState>
    </Router>
  );
};

export default App;
