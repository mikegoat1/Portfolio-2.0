import React from "react";
import "./style.css"; 

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Subfooter(){
    return(
        <div>
            <Container className="m-5 theborder p-5" >
                <Row>
                    <Col xs={5} className=" p-2" >
                    <h3 style={{color:"#394867"}} id="contact-me" ><strong>Contact-Me</strong></h3>
                    </Col>
                    <Col>
                    <a id="phone" href="tel:2139260655"> Call/Message</a>
                    </Col>
                    <Col>
                    <a id="email" href="mailto:mikeg.o.a.t.1@gmail.com">mikeg.o.a.t.1@gmail.com</a>
                    </Col>
                    <Col>
                    <a id="github" href="https://github.com/mikegoat1?tab=repositories">GitHub</a>
                    </Col>
                    <Col>
                    <a id="twitter" href="https://twitter.com/DJOwlEye">Twitter</a>
                    </Col>
                    <Col>
                    <a id="linkedin" href="https://www.linkedin.com/in/michael-johnson-8b752790/">Linkedin</a>
                    </Col>
                </Row>
            </Container>
        </div>

    ); 
}

export default Subfooter; 