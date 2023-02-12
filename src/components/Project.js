import React from "react";
import { Col } from "react-bootstrap";

export const Project = ({ title, githubLink, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="card">
                <img src={imgUrl} alt='card1'/>
                <div className="card-text">
                    <h4>{title}</h4>
                    <span>{githubLink}</span>
                </div>
            </div>
        </Col>
    )
}