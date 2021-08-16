import React from "react";
import "./Home.css";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Carnival from "../../components/Carnival";
import Subfooter from "../../components/subFooter";

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import { Image } from "react-bootstrap";
import avatar from "../../MikeyAvatar.PNG"

function Home() {







    return (
        <div>
            <Header />
            <Hero />
            <Container className="mt-5 d-felx" >
                <Row>
                    <Col md={4} >
                        <h3 id="about-me" className="w-70 text-align-end" >About Me</h3>
                        <Image id="avatar" src={avatar}></Image>
                    </Col>
                    <Col md={8} >
                        <p>

                            Full-stack Developer in creating and managing websites. 
                            Recently earned a Certificate in Full-stack Development from UCLA, expanding skills in HTML, CSS, React, NoSql, MySQL, Bootstrap, and JavaScript.
                             I pride myself on persistence, patience and adaptation to new and challenging environments. 
                             During my time at UCLA, I served as a project manager to multiple groups, helping to establish weekly goals as well as strategies and timelines for accomplishing those goals. 
                             The freedom of coding and the discipline of utilizing a new competency to make it run efficiently not only excites but motivates me. 
                             Passionate about creating life-enhancing user experiences and collaborating with others to develop meaningful mobile and web applications. 
                             My professional background in technologies and other mediums, also my drive for problem solving makes me a great piece to add to any organization.
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
                        <Carnival />
                    </Col>
                </Row>
                <hr></hr>
                <Row className="mt-5" >
                    <Col md={4} >
                        <h3>Tech:</h3>
                    </Col>
                    <Col md={4}>
                        <ul>
                            <li>React.js</li>
                            <li>Bootstrap</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>NodeJS</li>
                            <li>MongoDB</li>
                            <li>NoSQL</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul>
                            <li>HandleBars</li>
                            <li>Sequelize</li>
                            <li>AWS</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>#C</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Subfooter />
                </Row>
            </Container>



        </div>

    )
};

export default Home;