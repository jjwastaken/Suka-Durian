import React, {useState, useEffect} from "react";
import "./profile.css";
import { Row, Col } from "react-bootstrap";
import durianProfile from "../../img/durianProfile.jpg";

const profileName = "Guest";

export default function Profile() {
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
        <div>
            <Row className="profile">
                <Col>
                    <div className="circle">
                        <div className="backgroundCircleBack">
                            <div className="backgroundCircleMid">
                                <div className="aboutImgDiv">
                                    <img className="imgInCircle" alt="profile" src={durianProfile} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                {!name ?
                    <div className="profileName">
                        {profileName}
                    </div>:
                    <div className="profileName">
                        {name} 
                    </div>
                }  
                </Col>
            </Row>
            <Row className="profile">
                
            </Row>
        </div>
    )
}
