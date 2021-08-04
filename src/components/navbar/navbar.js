import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import "../../App";
import { Row, Col } from "react-bootstrap";

const tabs = [{
    route: "/",
    icon: faHome,
    label: "Home"
}, {
    route: "/profile",
    icon: faUserCircle,
    label: "Profile"
}]

export default function Navbar({setAuth}) {
    return (
        <div>
            {/* TOP Tab Navigator*/}
            {setAuth=false}
            {console.log("setauth in NAVBAR is: " + Boolean(setAuth))}
            <nav className="navbar navbar-expand-md navbar-light sticky-top" role="navigation">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Brand</a>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile" className="nav-link">
                                Profile
                            </NavLink>
                        </NavItem>
                        {/* Login and Logout button */}
                        {!setAuth ?
                        <NavItem>
                            <NavLink to="/login" className="nav-link">
                                <button className="loginButton">Login</button>
                            </NavLink>
                        </NavItem> : 
                        <NavItem>
                        <NavLink to="/profile" className="nav-link">
                            <button className="loginButton" onClick={() => setAuth(false)}>Logout</button>
                        </NavLink>
                    </NavItem>}
                    </Nav>
                </div>
            </nav>
            {/* BOTTOM Tab Navigator*/}
            {/* <Row className="botNav">
                <Col >
                    <NavLink to="/" className="nav-link" activeClassName="active">
                        <FontAwesomeIcon size="lg" icon={faHome} />
                        <div>Home</div>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/profile" className="nav-link" activeClassName="active">
                        <FontAwesomeIcon size="lg" icon={faUserCircle} />
                        <div>Profile</div>
                    </NavLink>
                </Col>
            </Row> */}
            <nav className="navbar fixed-bottom navbar-light bottom-tab-nav" role="navigation">
                <Nav className="w-100">
                    <div className=" d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) => (
                                <NavItem key={`tab-${index}`}>
                                    <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                                        <div className="row d-flex flex-column justify-content-center align-items-center">
                                            <FontAwesomeIcon size="lg" icon={tab.icon} />
                                            <div className="bottom-tab-label">{tab.label}</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>
                </Nav>
            </nav>
        </div>
    )
};