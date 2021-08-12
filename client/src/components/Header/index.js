import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import resume from "../../UCLA Resume 8-6-21.pdf"; 

import {AiOutlineDownload} from "react-icons/ai"


function Header() {
    return (
        <Navbar className="what" >
            <Container  >
                <Row className="d-flex flex-grow-1">
                    <Col >
                        <Navbar.Brand className="name text-left" href="#home">Michael L. Johnson</Navbar.Brand>
                    </Col>
                    <Col className="TheLink" xs="auto">
                        <Nav className="flex-wrap text-right " >
                            <Nav.Link href="#about-me">About-Me</Nav.Link>
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link href="#contact-me">Contact-Me</Nav.Link>
                            <Nav.Link href={resume}>Resume</Nav.Link>
                            <Nav.Link href={resume} download={resume} ><AiOutlineDownload/></Nav.Link>

                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Header;