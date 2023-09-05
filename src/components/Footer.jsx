import React from "react";
import { Link } from "react-router-dom";
import GitHub from "../images/SVGs/Github.svg";
import LinkedIn from "../images/SVGs/Linkedin.svg";
import Gmail from "../images/SVGs/Gmail.svg";
import "./components.css";

function Footer() {
  return (
    <div className="footerParent">
      <div className="footerParentImg"></div>
      <footer>
        <div className="footConParent">
          <div className="footCon">
            <Link to="/">
              <div className="footName">
                <p>
                  <span>A</span>aditya
                </p>
                <p>
                  <span>J</span>ujagar
                </p>
              </div>
            </Link>
            <a href="/">aadityajujagar22@gmail.com</a>
          </div>
          <p className="footRole">Web Designer and Front-end Web Developer</p>
        </div>
        <div className="footMedia">
          <h1>Media</h1>
          <div className="footMediaIco">
            <img src={GitHub} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Gmail} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
