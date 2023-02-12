import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import self from "../assets/img/IMG20230130143119.jpg";

export const About = () => {
    return (
      <section id="home" className="about">
        <Container>
            <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1><span className="wrap">Full Stack Web Developer</span></h1>
                <p>
                Hi there! My name is Jesse Barnett, and I am 27 and live in South Australia.
                I have always been passionate about technology and finding web development was a big step in the right direction for me.
                My goal as a Full stack web developer is to grow and learn and develop a career. I believe that persistence and focus can drive anyone to achieve what they want, and I strive to bring this philosophy to every project I work on.
                When I'm not working, you can find me going to the gym/ playing video games and spending time with family.
                If you would like to work with me or just want to say hi, feel free to get in contact. I would love to hear from you!
                </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={self} alt="Header img" />
            </Col>
            </Row>
        </Container>
      </section>
    );
}
