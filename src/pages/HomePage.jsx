import React from "react";
import HeroSec from "../components/HeroSec";
import ProjectSec from "../components/ProjectSec";
import SkillsSec from "../components/SkillsSec";
import AboutMeSec from "../components/AboutMeSec";
import ContactSec from "../components/ContactSec";
import "../components/components.css";

function HomePage() {
  return (
    <div>
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
    </div>
  );
}

export default HomePage;
