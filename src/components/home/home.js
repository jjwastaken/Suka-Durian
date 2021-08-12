import React, {useState, useEffect} from "react";
import './home.css';
import durianBackground from "../../img/durian-background1.jpg";
import { Row, Col } from "react-bootstrap";

export default function Home({setAuth}) {

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

  // useEffect makes many requests, adding the "[]" enables you to only make 1 request
  useEffect(() => {
    getName()

  }, []);

  return (
    <div className="home">
      {!name ?
      <h1>Welcome to Suka Durian!</h1> :
      <h1>Welcome to Suka Durian, {name}!</h1>
      }
      <Row className="homeBody">
        <img
          className="img1"
          alt="durian background 1"
          src={durianBackground}
        />
      </Row>
      This is App, APP together strong!
    </div>
  );
}