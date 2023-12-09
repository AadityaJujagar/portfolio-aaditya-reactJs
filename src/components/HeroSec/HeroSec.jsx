import React, { useEffect } from "react";
import HeroImg from "../../images/projectPics/Aaditya1.png";
import BlockPrimary from "../../images/SVGs/SquareBlockPrim.svg";
import "./herosec.css";
import Typed from "typed.js";

function initTyped() {
  const typed = new Typed(".skills", {
    strings: [
      "MERN Stack Developer",
      "Full Stack Web-Developer",
      "Backend Programmer",
      "Frontend Enthusiast",
    ],
    loop: true,
    typeSpeed: 120,
    backSpeed: 40,
    backDelay: 1000,
    showCursor: true,
    cursorChar: "",
  });

  return typed;
}

function HeroSec() {
  useEffect(() => {
    const typed = initTyped();

    return () => {
      typed.start();
    };
  }, []);

  return (
    <div className="heroParent">
      <section className="heroSec">
        <div className="heroLHS">
          <p className="heroHeading">I am a_</p>
          <span className="skills"></span>
          <p className="heroDesc">
            Hi, there! Myself Aaditya, I'm a fresher passout student passionated
            about Web-Development and here is my portfolio website. Here you can
            find my projects and skills in this field.
          </p>
          <a href="mailto:aadityajujagar@gmail.com" target="_">
            <button className="hireMe">Hire Me!!</button>
          </a>
        </div>
        <div className="heroRHS">
          {/* <img src={Logo} className="heroRHSLogo" alt="" /> */}
          <img src={HeroImg} className="heroImg" alt="" />
          <div className="heroStatus">
            <img className="heroStatusImg" src={BlockPrimary} alt="" />
            <p>Open to work as a</p>
            <span>MERN-Stack developer</span>
          </div>
          {/* <img src={DotsFrame1} className="dotFrame" alt="" /> */}
        </div>
      </section>
    </div>
  );
}

export default HeroSec;
