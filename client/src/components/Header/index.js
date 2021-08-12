import React, { useState, useEffect } from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import resume from "../../UCLA Resume 8-6-21.pdf";

import { AiOutlineDownload } from "react-icons/ai"

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";


function Header() {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState(); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            alert("Valid email address!");
            document.form1.text1.focus();
            handleClose(); 
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            document.form1.text1.focus();
            handleShow();
            return false;
        }
    }

    const handleFormSubmit = event => {
        event.preventDefault();
      };


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
                            <Nav.Link onClick={handleShow}  >Contact-Me</Nav.Link>
                            {/* Modal */}
                            <>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Contact-Me</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                            </div>
                                        </form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className="closeBtn" onClick={handleClose}>
                                            Close
                                        </Button>
                                        {/* This is where I need to work on submit of email */}
                                        <Button className="saveBtn" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>

                            <Nav.Link href={resume}>Resume</Nav.Link>
                            <Nav.Link href={resume} download={resume} ><AiOutlineDownload /></Nav.Link>

                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Header;