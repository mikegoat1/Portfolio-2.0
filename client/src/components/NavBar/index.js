import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";



function NB() {
    return (
        <Navbar className="what" >
            <Container  >
                <Row>
                    <Col >
                        <Navbar.Brand className="name text-left" href="#home">Michael L. Johnson</Navbar.Brand>
                    </Col>
                    <Col className="TheLink" xs="auto">
                        <Nav className="flex-wrap text-right " >
                            <Nav.Link href="#about-me">About-Me</Nav.Link>
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link href="#contact-me">Contact-Me</Nav.Link>
                            <Nav.Link href="https://docs.google.com/document/d/1-ndNX64YapoizmpgtkVoYeJFh-AQtyvM4WtkMllvQrk/edit?usp=sharing">Resume</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NB;