import React from "react";
import { Link } from "react-router-dom";
import GitHub from "../../images/SVGs/Github.svg";
import LinkedIn from "../../images/SVGs/Linkedin.svg";
import Gmail from "../../images/SVGs/Gmail.svg";
import "./footer.css";

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
            <a target="_" href="mailto:aadityajujagar@gmail.com">
              aadityajujagar@gmail.com
            </a>
          </div>
          <p className="footRole">Web Designer & MERN Stack Web Developer</p>
        </div>
        <div className="footMedia">
          <h1>Media</h1>
          <div className="footMediaIco">
            <a href="https://github.com/AadityaJujagar/">
              <img src={GitHub} alt="" />
            </a>
            <a target="_" href="https://linkedin.com/in/aadityajujagar/">
              <img src={LinkedIn} alt="" />
            </a>
            <a
              className="gmailAnchorFoot"
              target="_"
              href="mailto:aadityajujagar@gmail.com"
            >
              <img src={Gmail} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
