import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";



function NB() {
    return (
        <Navbar bg="light" >
            <Container className="justify-content-end me-3 w-100 " >
                <Row>
                    <Col>
                        <Navbar.Brand className="" href="#home">Michael L. Johnson</Navbar.Brand>
                    </Col>
                    <Col xs="auto" >
                        <Nav className="flex-wrap " >
                            <Nav.Link href="#home">About-Me</Nav.Link>
                            <Nav.Link href="#link">Work</Nav.Link>
                            <Nav.Link href="#home">Contact-Me</Nav.Link>
                            <Nav.Link href="#link">Resume</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NB;