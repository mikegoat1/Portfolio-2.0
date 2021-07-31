import React from "react"; 
import image from "../../Hero.png"
import "./style.css"

import { Image } from "react-bootstrap";


function Hero(){
    return (
        <Image className="set" src={image} fluid />
    ); 
}

export default Hero; 