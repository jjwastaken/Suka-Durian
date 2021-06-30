import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import "./signup.css";
import durianProfile from "../../img/durianProfile.jpg";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const onSubmitForm = async e => {
        //e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/profiles", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: name, email: email, password: password, mobilenumber: mobileNumber}),
            })
            //console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
        <div className="signup">
            <Row>
                <img className="brandImg" alt="brand" src={durianProfile} />
            </Row>
            <Row>
                <h1 className="textSignup">
                    Sign Up
                </h1>
            </Row>
            <Row>
                <form className="textSignup" onSubmit={onSubmitForm}>
                    <label>Name:</label><br />
                    <input 
                        type="form-control" 
                        alt="name" 
                        id="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <br />
                    <label>Email:</label><br />
                    <input 
                        type="form-control" 
                        alt="email" 
                        id="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br />
                    <label>Password:</label><br />
                    <input 
                        type="password" 
                        alt="password" 
                        id="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <label>Mobile Number:</label><br />
                    <input 
                        type="mobileNumber" 
                        alt="mobileNumber" 
                        id="mobileNumber" 
                        value={mobileNumber} 
                        onChange={e => setMobileNumber(e.target.value)}
                    />
                    <br />
                    <button className="btn btn-success">Submit</button>
                </form>
            </Row>
            <Row>
                <form className="textSignup">
                
                </form>
            </Row>
            <Row>

            </Row>
        </div>
    )
}