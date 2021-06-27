import React from "react";
import "./profile.css";
import { Row, Col } from "react-bootstrap";
import durianProfile from "../../img/durianProfile.jpg";

const profileName = "Guest";

export default function Profile() {
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
                    <div className="profileName">
                        {profileName}
                    </div>
                </Col>
            </Row>
            <Row className="profile">
                
            </Row>
        </div>
    )
}
