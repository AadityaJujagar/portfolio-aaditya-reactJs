import React from "react";
import HeroImg2 from "../images/projectPics/jc-gellidon-e-3-n-um-c-scugo-unsplash-removebg-preview-11.png";
import Line2 from "../images/SVGs/Line2.svg";
import DotsFrame1 from "../images/SVGs/DotsFrame1.svg";
import DotsFrame2 from "../images/SVGs/DotsFrame2.svg";
import "./components.css";

function AboutMeSec() {
  return (
    <div className="abtMeParent">
      <section className="abtMeSec">
        <div className="abtMeHead">
          <p>
            <span>#</span>about-me
          </p>
          <img src={Line2} alt="" />
        </div>
        <div className="abtMeDesc">
          <p>Hello, i'm Aaditya!</p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium id consequuntur in, esse a assumenda quam nesciunt.
            Reprehenderit dolores labore corrupti accusamus placeat adipisci,
            ipsa architecto incidunt magnam ad enim?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus dolor commodi non. Iusto nulla suscipit quibusdam
            neque eveniet aperiam blanditiis assumenda! Voluptas adipisci iste
            est, accusantium nulla expedita reprehenderit atque vitae itaque
            fugit dolorem, voluptate, delectus eligendi. Eligendi dolor suscipit
            incidunt, vero, repellendus expedita vitae, distinctio error eveniet
            hic maxime?
          </p>
          <br />
          <br />
          <a href="/">
            <button>Download Resume {"<~~>"}</button>
          </a>
        </div>
        <img id="abtMeImg1" src={DotsFrame1} alt="" />
        <img id="abtMeImg2" src={DotsFrame2} alt="" />
        <img id="abtMeImg3" src={HeroImg2} alt="" />
        <img id="abtMeImg4" src={Line2} alt="" />
      </section>
    </div>
  );
}

export default AboutMeSec;
