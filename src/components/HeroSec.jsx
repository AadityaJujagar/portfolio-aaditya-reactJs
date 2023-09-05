import React from "react";
import Logo from "../images/SVGs/Logo.svg";
import DotsFrame1 from "../images/SVGs/DotsFrame1.svg";
import HeroImg from "../images/projectPics/image.png";
import BlockPrimary from "../images/SVGs/SquareBlockPrim.svg";
import "./components.css";

function HeroSec() {
  return (
    <div className="heroParent">
      <section className="heroSec">
        <div className="heroLHS">
          <p className="heroHeading">
            I am a <span>Full Stack Web-Developer</span>
          </p>
          <p className="heroDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem saepe
            dicta velit, nostrum rerum ipsa excepturi. Distinctio ullam
            necessitatibus quisquam?
          </p>
          <button className="hireMe">Hire Me!!</button>
        </div>
        <div className="heroRHS">
          <img src={Logo} className="heroRHSLogo" alt="" />
          <img src={HeroImg} alt="" />
          <img src={DotsFrame1} alt="" />
          <div className="heroStatus">
            <img className="heroStatusImg" src={BlockPrimary} alt="" />
            <p>Currently looking for a</p>
            <span>MERN-Stack dev job</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSec;
