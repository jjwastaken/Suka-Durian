import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import "./login.css";
import durianProfile from "../../img/durianProfile.jpg";
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";

export default function Login({setAuth}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const onSubmitForm = async e => {
        //e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: name, email: email, password: password, mobilenumber: mobileNumber}),
            });

            const parseRes = await response.json();

            if(parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
                toast.success("Login Successfully!");
            }
            else{
                setAuth(false);
                toast.error(parseRes); // this will return error from jwtAuth.js
            }
            //console.log(parseRes);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="login">
            <div>
                <Row>
                    <img className="brandImg" alt="brand" src={durianProfile} />
                </Row>
                <Row>
                    <h1 className="textLogin">
                        Login
                    </h1>
                </Row>
                <Row>
                    <form className="textLogin">
                        <label>Name:</label><br />
                        <input
                            type="form-control"
                            alt="name"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="form-control my-0"
                        />
                        <br />
                        <label>Email:</label><br />
                        <input
                            type="form-control"
                            alt="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-control my-0"
                        />
                        <br />
                        <label>Password:</label><br />
                        <input
                            type="password"
                            alt="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="form-control my-0"
                        />
                        <br />
                        <label>Mobile Number:</label><br />
                        <input
                            type="mobileNumber"
                            alt="mobileNumber"
                            id="mobileNumber"
                            value={mobileNumber}
                            onChange={e => setMobileNumber(e.target.value)}
                            className="form-control"
                        />
                        <br />
                        <Link to="/signup">Don't have an account? Sign up here!</Link>
                        <br />
                        <button className="btn btn-block btn-success" type="button" onClick={onSubmitForm}>Submit</button>
                    </form>
                </Row>
                <Row>
                    <form className="textLogin">

                    </form>
                </Row>
                <Row>

                </Row>
            </div>
        </div>
    )
}