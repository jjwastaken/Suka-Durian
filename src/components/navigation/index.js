import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from '../../App';
import Profile from "../profile/profile";
import Navbar from "../navbar/navbar";


function Navigation() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        </div>
    )
}

export default Navigation;