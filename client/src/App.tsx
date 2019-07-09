import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Friends from "./Pages/Friends";
import NotFoundPage from "./Pages/NotFoundPage";
import AuthContextState from "./context/auth/AuthContextState";

const App: React.FC = () => {
  return (
    <Router>
      <AuthContextState>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/about" component={About} />
          <Route exact path="/friends" component={Friends} />
          <Route exact path="*" component={NotFoundPage}/>
        </Switch>
      </AuthContextState>
    </Router>
  );
};

export default App;
