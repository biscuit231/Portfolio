import React from "react";
import { Col, Row } from "react-bootstrap";
import stack from "../assets/img/stack.png";
import github from "../assets/img/icons8-github-50.png";
import linkedin from "../assets/img/icons8-linkedin-circled-50.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Row className="align-item-center">
                <Col sm={6}>
                    <img src={stack} alt="logo" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/jesse-barnett-b264b4263/"><img src={linkedin} alt="linkedin" /></a>
                        <a href="https://github.com/biscuit231"><img src={github} alt="github" /></a>
                    </div>
                    <p>CopyRight 2023. All Rights Reserved.</p>
                </Col>
            </Row>
        </footer>
    )
}