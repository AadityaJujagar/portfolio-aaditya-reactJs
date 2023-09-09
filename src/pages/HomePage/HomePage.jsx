import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSec from "../../components/HeroSec/HeroSec";
import ProjectSec from "../../components/ProjectSec/ProjectSec";
import SkillsSec from "../../components/SkillsSec/SkillsSec";
import AboutMeSec from "../../components/AboutMeSec/AboutMeSec";
import ContactSec from "../../components/ContactSec/ContactSec";
import Footer from "../../components/Footer/Footer";
import GitHub from "../../images/SVGs/Github.svg";
import StrokeLine from "../../images/SVGs/LineStroke.svg";
import LinkedIn from "../../images/SVGs/Linkedin.svg";
import "./homepage.css";

function HomePage() {
  return (
    <div className="homePage">
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
          href="https://linkedin.com/in/aaditya-jujagar"
        >
          <img src={LinkedIn} alt="" />
        </a>
      </div>

      {/* navbar */}
      <Navbar />

      {/* hero-section */}
      <HeroSec />

      {/* projects-section */}
      <ProjectSec />

      {/* skills-section */}
      <SkillsSec />

      {/* about-me-section */}
      <AboutMeSec />

      {/* contacts-section */}
      <ContactSec />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
