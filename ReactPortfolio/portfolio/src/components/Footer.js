import React from "react"
import "./Footer.css";


const Footer = () => 
(
    <footer className="py-5" id="Footer">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
        <div className="mb-5">
          <p>Jorge Hernandez's Portfolio</p>
          <p>+52 8114206156</p>
          <p>j_hernandez50@hotmail.com</p>
        </div>
        <div>
        </div>
      </div>
    </div>
    <div className="mb-5" />
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <p>All rights reserved © 2021</p>
        <div>
          <a className="d-inline-block me-4" href="https://github.com/jhernandez50">
            <img src="bootstrap5-plain-assets/socials/github.svg" alt="" />
          </a>
          <a className="d-inline-block" href="https://www.linkedin.com/in/jorge-alberto-hernandez-de-leon-731b6ab2/">
            <img src="bootstrap5-plain-assets/socials/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
 



export default Footer;
