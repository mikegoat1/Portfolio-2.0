import React from 'react';
import "./style.css";
import { Button, Carousel } from "react-bootstrap";

import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import Quiz from "../../Great-Quiz.png";
import Note from "../../Note.png";
import Google from "../../Google.png";

function Carnival() {
    return (
        <Container className="justify-content-center">
            <Row className="align-self-center" >
                <Carousel variant="dark"  >
                    {/* FliccPic */}
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://mikegoat1.github.io/FliccPicker/assets/images/FLICCPICKER.png?text=First slide&bg=373940"
                            alt="FliccPicker"
                        />

                        <Carousel.Caption>
                            <p> <strong style={{ backgroundColor: '#F1F6F9' }} >Netflix decision maker. Tech: HTML5, CSS, jQuery, Ajax </strong> </p>
                            <Button className="me-2" href="https://github.com/RandonRussell85/FliccPicker" style={{ backgroundColor: '#394867' }} >GitHub</Button>
                            <Button href="https://mikegoat1.github.io/FliccPicker/" style={{ backgroundColor: '#394867' }} >Deployed</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Audio-Freq */}
                    <Carousel.Item>

                        <img
                            className="d-block"
                            src="https://audio-freq.herokuapp.com/AudioFreq_logo.png?text=Second slide&bg=282c34"
                            alt="AudioFreq"
                        />

                        <Carousel.Caption>
                            <p><strong style={{ backgroundColor: '#F1F6F9' }}>
                                Podcasting rating and comment platform. Tech: React, Express, Mongoose, MongoDB, Passport,React-bootstrap 
                            </strong> </p>
                            <Button className="me-2" href="https://github.com/chrischo94/audioFreq" style={{ backgroundColor: '#394867' }} >GitHub</Button>
                            <Button href="https://audio-freq.herokuapp.com" style={{ backgroundColor: '#394867' }} >Deployed</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Ticket-Scalper */}
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://maple-eh-00291.herokuapp.com/images/ticket-scalper.png?text=Third slide&bg=20232a"
                            alt="Ticket Scalper"
                        />
                        <Carousel.Caption>
                            <h3> <strong style={{ backgroundColor: '#F1F6F9' }}  >Ticket-Scalper </strong></h3>
                            <p> <strong style={{ backgroundColor: '#F1F6F9' }}  > Platform to help find tickets for events in your area. Tech: Handlebars, Sequelize, CSS, Sequelize, Javascript, Express-session, DotEnv  </strong></p>
                            <Button className="me-2" href="https://github.com/mikegoat1/Ticket-Scalper" style={{ backgroundColor: '#394867' }} >GitHub</Button>
                            <Button href="https://maple-eh-00291.herokuapp.com" style={{ backgroundColor: '#394867' }} >Deployed</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Great Quiz */}
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={`${Quiz}?text=Fourth slide&bg=373940`}
                            alt="The Great Quiz"
                        />

                        <Carousel.Caption>
                            <p> <strong style={{ backgroundColor: '#F1F6F9' }}  >Dynamic DOM manipulation to create a quiz. Tech: Javascript, jQuery, HTML5, CSS3</strong> </p>
                            <Button className="me-2" href="https://github.com/mikegoat1/The-Great-Quiz" style={{ backgroundColor: '#394867' }} >GitHub</Button>
                            <Button href="https://mikegoat1.github.io/The-Great-Quiz/" style={{ backgroundColor: '#394867' }} >Deployed</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Note Taker */}
                    <Carousel.Item>

                        <img
                            className="d-block"
                            src={`${Note}?text=Fifth slide&bg=373940`}
                            alt="Note Taker"
                        />

                        <Carousel.Caption>
                            <p> <strong style={{ backgroundColor: '#F1F6F9' }}  >
                                Take some notes with me!
                            </strong> </p>
                            <Button className="me-2" href="https://github.com/mikegoat1/Lets-Take-Notes" style={{ backgroundColor: '#394867' }} >GitHub</Button>
                            <Button href="https://tranquil-headland-79814.herokuapp.com" style={{ backgroundColor: '#394867' }} >Deployed</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Google */}
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={`${Google}?text=Sixth slide&bg=373940`}
                            alt="Google Books"
                        />
                        <Carousel.Caption>
                            <h3>  <strong style={{ backgroundColor: '#F1F6F9' }}  >GoogleDB</strong></h3>
                            <p> <strong style={{ backgroundColor: '#F1F6F9' }}   >Add and sort through books.Tech: React, Mongoose, Express, MongoDB, Axios </strong></p>
                            <Button className="me-2" href="https://github.com/mikegoat1/GoogleB" style={{ backgroundColor: '#394867' }} >GitHub</Button>
                            <Button href="https://secure-beyond-11669.herokuapp.com" style={{ backgroundColor: '#394867' }} >Deployed</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}

export default Carnival;