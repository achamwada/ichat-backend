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
import PageContextState from './context/page/PageContextState';
import InBox from './Pages/InBox';
import Channels from './Pages/Channels';

import store from './store/storeConfiguration';
import { Provider } from 'react-redux';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#017b42' }, // Purple and green play nicely together.
    secondary: { main: '#bf072b' } // This is just green.A700 as hex.
  }
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <PageContextState>
            <AuthContextState>
              <FriendContextState>
                <StatusContextState>
                  <ChatContextState>
                    <Header>
                      <Grid container direction="row">
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/inbox" component={InBox} />
                          <Route exact path="/chats" component={Chats} />
                          <Route path="/profile/" component={Profile} />
                          <Route exact path="/about" component={About} />
                          <Route exact path="/friends" component={Friends} />
                          <Route exact path="/user/*" component={UserProfile} />
                          <Route exact path="/channels" component={Channels} />
                          <Route exact path="*" component={NotFoundPage} />
                        </Switch>
                      </Grid>
                    </Header>
                    <Footer />
                    <Switch>
                      <Route exact path="/login" component={Login} />
                    </Switch>
                  </ChatContextState>
                </StatusContextState>
              </FriendContextState>
            </AuthContextState>
          </PageContextState>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
