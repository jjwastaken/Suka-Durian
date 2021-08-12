import React, {useState, useEffect} from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import "../../App";

import {toast} from "react-toastify";

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

    const [name, setName] = useState("");
    
    async function getName() {
        try {
          const response = await fetch("http://localhost:5000/home/", {
            method: "GET",
            headers: {token: localStorage.token}
          });
    
          const parseRes = await response.json();
          // console.log(parseRes);
          setName(parseRes.user_name);
        } catch (error) {
          console.error(error.message);
        }
      }

      function refresh(){
        window.location.reload();
      }
      const logout = (e) => {
          localStorage.removeItem("token");
          setAuth(false);
          toast.success("Logout Successfully!");
      }
    
    // useEffect makes many requests, adding the "[]" enables you to only make 1 request
    // There's no "[]" because I want navbar to refresh so that login button will change.
      useEffect(() => {
        getName()
      });

    return (
        <div>
            {/* TOP Tab Navigator*/}
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
                        {!name ?
                        <NavItem>
                            <NavLink to="/login" className="nav-link">
                                <button className="loginButton">Login</button>
                            </NavLink>
                        </NavItem> : 
                        <NavItem>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {name}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <button className="dropdown-item" onClick={e => logout(e)}>Logout</button>
                                </div>
                            </div>
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