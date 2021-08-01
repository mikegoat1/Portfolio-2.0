import React from 'react';
import "./style.css";
import { Carousel } from "react-bootstrap";

import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";





function Carnival() {
    return (
        <Container className="justify-content-center">
            <Row className="align-self-center" >
                <Carousel variant="dark"  >
                    <Carousel.Item>
                        <a href="https://mikegoat1.github.io/FliccPicker/" >
                            <img
                                className="d-block"
                                src="https://mikegoat1.github.io/FliccPicker/assets/images/FLICCPICKER.png?text=First slide&bg=373940"
                                alt="First slide"
                            />
                        </a>
                        <Carousel.Caption>
                            <p style={{ backgroundColor: '#F1F6F9' }} > <strong>We help decide what to watch in a sea of choices.</strong> </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://audio-freq.herokuapp.com" >
                            <img
                                className="d-block"
                                src="https://audio-freq.herokuapp.com/AudioFreq_logo.png?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />
                        </a>
                        <Carousel.Caption>
                            <p style={{ backgroundColor: '#F1F6F9' }} > <strong>
                                One stop shop for all your podcasting needs.
                            </strong> </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://maple-eh-00291.herokuapp.com" >

                            <img
                                className="d-block"
                                src="https://maple-eh-00291.herokuapp.com/images/ticket-scalper.png?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3 style={{ backgroundColor: '#F1F6F9' }} >Ticket-Scalper</h3>
                            <p style={{ backgroundColor: '#F1F6F9' }}  >We find the lowest price tickets in your neigborhood. We sellin tickets heaaaaar!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}

export default Carnival;