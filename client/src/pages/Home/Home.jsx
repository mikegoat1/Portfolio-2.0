import React from "react";
import "./Home.css";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Carnival from "../../components/Carnival"; 
import Subfooter from "../../components/subFooter";

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import {Image} from "react-bootstrap"; 
import avatar from "../../MikeyAvatar.PNG"

function Home() {







    return (
        <div>
            <Header />
            <Hero />
            <Container  className="mt-5 d-felx" >
                <Row>
                    <Col md={4} >
                        <h3 id="about-me" className="w-70 text-align-end" >About Me</h3>
                        <Image id="avatar" src={avatar}></Image>
                    </Col>
                    <Col md={8} >
                        <p>
                            I am Michael L Johnson! One of the most widely used names in USA. I've come a long way in this journey of computing. I have jumped around from many positions and job titles. I have professional experience ranging from the thrills of DJ'n and bartending to slow moments in a law firm. Each one of them brought me closer to my overall objective. Coding! I've always had an interest in tech and bringing up new ideas. I started coding back in my younger days helping my father make custom computers. I started to take coding as a career path around 2018. I do some coarses part-time at Santa Monica College and some courses online. That go the ball moving for me to enroll and get a certificate in Full-Stack Development at a bootcamp in UCLA. 
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
                <Row>
                    <Subfooter/>
                </Row>
            </Container>



        </div>

    )
};

export default Home;