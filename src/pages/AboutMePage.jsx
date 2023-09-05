import React from "react";
import AboutMeSec from "../components/AboutMeSec";
import "./pages.css";

function AboutMePage() {
  return (
    <div className="skillsPageParent">
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
    </div>
  );
}

export default AboutMePage;
