import React, { Fragment, useState} from "react";
//import './App.css';
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Profile from "./components/profile/profile";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <Router>
        <Navbar setAuth={setAuth} />
        <Switch>
          {/* use render because don't want to unmount when switch path */}
          <Route path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/" />} /> 
          <Route path="/signup" render={props => !isAuthenticated ? <Signup {...props} setAuth={setAuth} /> : <Redirect to="./components/login/login" />} />
          <Route path="/profile" render={props => <Profile {...props}/>} />
          <Route path="/" render={props => <Home {...props}/>} />
        </Switch>
      </Router>
    </Fragment>
  );
}
