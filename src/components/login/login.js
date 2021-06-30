import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import "./login.css";
import durianProfile from "../../img/durianProfile.jpg";

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const onSubmitForm = async e => {
        //e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/profiles");
            const jsonData = await response.json();
            const stringUser = JSON.stringify(jsonData);
            var users = JSON.parse(stringUser);

            // const user = JSON.stringify(jsonData);
            // const inUser = user.includes(email);
            //console.log(user);
            for(var i in users)
            {
                if(users[i].email === email)
                {
                    console.log(users[i].email);
                    console.log(i);
                }
            }
            let hasUser = users.some( user => user['email'] === email);
            //let userLogin = users.filter( user => user['email'] === email);
            if(hasUser)
            {
                console.log(users, " found!");
            }
            else{
                console.log(users, "NOT found!");
            }
            //console.log(JSON.stringify(jsonData));
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
        <div className="login">
            <Row>
                <img className="brandImg" alt="brand" src={durianProfile} />
            </Row>
            <Row>
                <h1 className="textLogin">
                    Login
                </h1>
            </Row>
            <Row>
                <form className="textLogin" onSubmit={onSubmitForm}>
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
                    <a href="/signup">Don't have an account? Sign up here!</a>
                    <br />
                    <button className="btn btn-success">Submit</button>
                </form>
            </Row>
            <Row>
                <form className="textLogin">
                
                </form>
            </Row>
            <Row>

            </Row>
        </div>
    )
}