import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


export const Contact = () => {
    const initialForm = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(initialForm);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {
        setFormDetails(initialForm);
    }

    return (
        <section className="contact" id="contact">
            <Container>
            <Row className="align-items-center">
                    <Col md={6}>
                        <h2>Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={12} className="px-1" id="messageform">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                </Col>
                                <button type="submit"><span>Send</span></button>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}