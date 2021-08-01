import React from 'react';
import "./style.css"; 
import { Carousel } from "react-bootstrap";

import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";





function Carnival() {
    return (
        <Container className="justify-content-center">
            <Row className ="align-self-center" >
                <Carousel  >
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://mikegoat1.github.io/FliccPicker/assets/images/FLICCPICKER.png?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>FliccPicker</h3>
                            <p>We help decide what to watch in a sea of choices.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}

export default Carnival;