import React from "react";
import './App.css';
import durianBackground from "./img/durian-background1.jpg";
import { Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <div className="app">
      <Row className="body">
        <img
          className="img1"
          alt="durian background 1"
          src={durianBackground}
        />
      </Row>
      This is App
    </div>
  );
}
