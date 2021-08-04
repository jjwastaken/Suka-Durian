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
      console.log(parseRes);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getName()
  })

  return (
    <div className="home">
      <h1>Welcome to Suka Durian, friend!</h1>
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