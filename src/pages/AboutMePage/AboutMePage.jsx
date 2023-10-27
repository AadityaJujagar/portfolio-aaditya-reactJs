import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutMeSec from "../../components/AboutMeSec/AboutMeSec";
import StrokeLine from "../../images/SVGs/LineStroke.svg";
import GitHub from "../../images/SVGs/Github.svg";
import LinkedIn from "../../images/SVGs/Linkedin.svg";
import "./aboutmepage.css";

function AboutMePage() {
  return (
    <div className="skillsPageParent">
      {/* stroke images */}
      <div className="strokeSec">
        <img src={StrokeLine} alt="" />
        <a
          className="GitHubAnchor"
          target="_"
          href="https://github.com/AadityaJujagar/"
        >
          <img src={GitHub} alt="" />
        </a>
        <a
          className="LinkedInAnchor"
          target="_"
          href="https://linkedin.com/in/aadityajujagar/"
        >
          <img src={LinkedIn} alt="" />
        </a>
      </div>

      {/* navbar */}
      <Navbar />
      <section className="skillsPage">
        {/* about-me section */}
        <div className="AbtMe">
          <AboutMeSec />
        </div>

        {/* skills-section */}
        <div className="skillsParent">
          <div className="skillsHeadSec">
            <p>
              <span>#</span>
              skills
            </p>
          </div>
          <div className="skillsTables">
            <div className="table">
              <div className="tableHeader">Languages</div>
              <div className="tableDesc">JavaScript C++ Python</div>
            </div>
            <div className="table">
              <div className="tableHeader">Databases</div>
              <div className="tableDesc">MongoDB Mongoose</div>
            </div>
            <div className="table">
              <div className="tableHeader">Tools</div>
              <div className="tableDesc">VSCode Git GitHub Figma</div>
            </div>
            <div className="table">
              <div className="tableHeader">Other tech-stack</div>
              <div className="tableDesc">HTML5 CSS3 REST</div>
            </div>
            <div className="table">
              <div className="tableHeader">Frameworks</div>
              <div className="tableDesc">React.js Express.js Node.js</div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default AboutMePage;
