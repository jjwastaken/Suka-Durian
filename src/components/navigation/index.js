import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from '../../App';
import Profile from "../profile/profile";
import Navbar from "../navbar/navbar";
import Signup from "../signup/signup";
import Login from "../login/login";

function Navigation() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        </div>
    )
}

export default Navigation;