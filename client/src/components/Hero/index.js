import React from "react"; 
import image from "../../Hero.png"

import { Image } from "react-bootstrap";


function Hero(){
    return (
        <Image height="100px" src={image} fluid />
    ); 
}

export default Hero; 