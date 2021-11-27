import React from "react";
import "./About.css";
import photo from './jorge_hdz.jpeg'


export const About = () => {
   return (
<div class="row">
    <div class="column">
    <h1>Hi, I'm Jorge Hernandez </h1>
    <p>I´m a network engineer in process to become a Full stack developer"</p>
            </div>
<div class="column">
            <img src={photo} alt="Picture of Jorge Hernandez"/>
    </div>
    </div>

  );
};