import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from '../../App';
import Profile from "../profile/profile";
import Navbar from "../navbar/navbar";


function Navigation() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route path="/" component={App} />
                </Switch>
                <Navbar />
            </Router>
        </div>
    )
}

export default Navigation;