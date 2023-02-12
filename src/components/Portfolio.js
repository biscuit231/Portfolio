import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Project } from "./Project";
import githubIcon from "../assets/img/icons8-github-50.png";
import screenshot1 from "../assets/img/Circle.png";
import screenshot2 from "../assets/img/Social.png";
import screenshot3 from "../assets/img/Pickapup.png";
import screenshot4 from "../assets/img/notetaker.png";
import screenshot5 from "../assets/img/weather.png";
import screenshot6 from "../assets/img/texteditor.png";


export const Portfolio = () => {

    const projects = [
        {
            title: 'Circle',
            githubLink: (<a href="https://github.com/biscuit231/Circle"><img src={githubIcon} alt="github1" id='github'/></a>),
            imgUrl: screenshot1,
        },
        {
            title: 'Social Network API',
            githubLink: (<a href="https://github.com/biscuit231/Social-Network-API"><img src={githubIcon} alt="github2" id='github'/></a>),
            imgUrl: screenshot2,
        },
        {
            title: 'Pick a Pup',
            githubLink: (<a href="https://github.com/ZacharyDonovan88/Pick-a-Pup-WebPage"><img src={githubIcon} alt="github3" id='github'/></a>),
            imgUrl: screenshot3,
        },
        {
            title: 'Note Taker',
            githubLink: (<a href="https://github.com/biscuit231/Note-Taker"><img src={githubIcon} alt="github4" id='github'/></a>),
            imgUrl: screenshot4,
        },
        {
            title: 'Weather Dashboard',
            githubLink: (<a href="https://github.com/biscuit231/Weather-Dashboard"><img src={githubIcon} alt="github5" id='github'/></a>),
            imgUrl: screenshot5,
        },
        {
            title: 'Text Editor',
            githubLink: (<a href="https://github.com/biscuit231/Text-Editor"><img src={githubIcon} alt="github6" id='github'/></a>),
            imgUrl: screenshot6,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects:</h2>
                        <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                    <Project 
                                        key={index}
                                        {...project}
                                    />
                                )
                             })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}