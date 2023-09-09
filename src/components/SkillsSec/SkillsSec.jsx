import React from "react";
import Line2 from "../../images/SVGs/Line2.svg";
import DotsFrame1 from "../../images/SVGs/DotsFrame1.svg";
import RectSquare from "../../images/SVGs/Rectangle.svg";
import Logo from "../../images/SVGs/Logo.svg";
import "./skillssec.css";

function SkillsSec() {
  return (
    <div className="skillsParent">
      <section className="skillsSec">
        <div className="skillsHeadSec">
          <p>
            <span>#</span>skills
          </p>
          <img src={Line2} alt="" />
        </div>
        <div className="skillsMain">
          <div className="imgParent">
            <img src={DotsFrame1} alt="" />
            <img src={DotsFrame1} alt="" />
            <img src={RectSquare} alt="" />
            <img src={RectSquare} alt="" />
            <img src={Logo} alt="" />
          </div>
          <div className="skillsTables">
            <div className="col1T1">
              <div className="tableHeader">Languages</div>
              <div className="tableDesc">JavaScript C++ Python</div>
            </div>
            <div className="tableCol2">
              <div className="col2T1">
                <div className="tableHeader">Databases</div>
                <div className="tableDesc">MongoDB Mongoose</div>
              </div>
              <div className="col2T2">
                <div className="tableHeader">Tools</div>
                <div className="tableDesc">VSCode Git GitHub Figma</div>
              </div>
            </div>
            <div className="tableCol3">
              <div className="col3T1">
                <div className="tableHeader">Other tech-stack</div>
                <div className="tableDesc">HTML5 CSS3 REST</div>
              </div>
              <div className="col3T2">
                <div className="tableHeader">Frameworks</div>
                <div className="tableDesc">React.js Express.js Node.js</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsSec;
