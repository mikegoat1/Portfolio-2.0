import React from "react";
import "./Home.css";

import NB from "../../components/NavBar";
import Hero from "../../components/Hero";
import Carnival from "../../components/Carousel"; 

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Home() {







    return (
        <div>
            <NB />
            <Hero />
            <Container  className="mt-5 d-felx" >
                <Row>
                    <Col md={4} >
                        <h3 id="about-me" >About Me</h3>
                    </Col>
                    <Col md={8} >
                        <p>
                            I am Michael L Johnson! One of the most widely used names. I've come a long way in this journey of computing. I have jumped around from many positions and job titles. I have professional experience ranging from the thrill of DJ'n and Bartending to slow moments in a law firm. Each one of them brought me closer to my overall objective. Coding! I've always had an interest in tech and bringing up new ideas. I know I'm just getting started, but I'm excited about where this is going to take me.
                        </p>
                    </Col>
                    <hr></hr>
                </Row>
                <Row>
                    <Col  >
                    <h3 id="work" className="text-center" > Work</h3>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Carnival/>
                    </Col>
                </Row>
                <hr></hr>

            </Container>



        </div>

    )
};

export default Home;