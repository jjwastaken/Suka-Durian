import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import "./login.css";
import durianProfile from "../../img/durianProfile.jpg";
import { Link } from 'react-router-dom';

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
            localStorage.setItem("token", parseRes.token);
            setAuth(true);
            console.log(parseRes);
            window.location.reload();
            // const jsonData = await response.json();
            // const stringUser = JSON.stringify(jsonData);
            // var users = JSON.parse(stringUser);

            // // const user = JSON.stringify(jsonData);
            // // const inUser = user.includes(email);
            // //console.log(user);
            // let index;
            // for (var i in users) {
            //     if (users[i].email === email) {
            //         console.log(users[i].email);
            //         console.log(i);
            //         index = i
            //         break;
            //     }
            // }
            // let hasUser = users.some(user => user['email'] === email);
            // //let userLogin = users.filter( user => user['email'] === email);
            // if (hasUser) {
            //     console.log(users[index].email, " found!");
            //     if (users[index].password === password) {
            //         console.log("Password match!");
            //         // setIsLoggedIn(true);
            //     }
            //     else {
            //         console.log("Password DONT match!");
            //     }
            // }
            // else {
            //     console.log(email, "NOT found!");
            // }
            // //console.log(JSON.stringify(jsonData));
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