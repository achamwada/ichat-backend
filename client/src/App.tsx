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
import UserProfile from './Pages/UserProfile';
import FriendContextState from './context/friends/FriendContextState';
import StatusContextState from './context/status/statusContextState';
import ChatContextState from './context/chat/chatsContextState';
const App: React.FC = () => {
  return (
    <Router>
      <AuthContextState>
        <FriendContextState>
          <StatusContextState>
            <ChatContextState>
              {/* <Header /> */}
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="baseline"
                style={
                  {
                    // padding: '5px',
                    // //maxWidth: '80%',
                    // margin: 'auto',
                    // marginTop: '2em'
                  }
                }
              >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/chats" component={Chats} />
                  <Route path="/profile/" component={Profile} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/friends" component={Friends} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/user/*" component={UserProfile} />
                  <Route exact path="*" component={NotFoundPage} />
                </Switch>
              </Grid>
              <Footer />
            </ChatContextState>
          </StatusContextState>
        </FriendContextState>
      </AuthContextState>
    </Router>
  );
};

export default App;
