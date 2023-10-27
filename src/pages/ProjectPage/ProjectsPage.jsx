import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {
  JsProjectsData,
  UIClonesData,
  ReactMajorProjectsData,
} from "../../Data";
import StrokeLine from "../../images/SVGs/LineStroke.svg";
import GitHub from "../../images/SVGs/Github.svg";
import LinkedIn from "../../images/SVGs/Linkedin.svg";
import "./projectpage.css";

function ProjectsPage() {
  return (
    <div className="proPageParent">
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

      <section className="proPage">
        <div className="proPageHead">
          <p>
            <span>/</span>
            projects
          </p>
          <p>List of my projects</p>
        </div>

        {/* ReactJs major projects list */}
        <div className="proPage">
          <div className="proSetHeads">
            <p>
              <span>#</span>
              React.Js-Major-Projects
            </p>
          </div>
          <div className="proCardSet">
            {ReactMajorProjectsData.map((proData) => (
              <ProjectCard proData={proData} key={proData.id} />
            ))}
          </div>
        </div>

        {/* JavaScript mini-projects list */}
        <div className="proPage">
          <div className="proSetHeads">
            <p>
              <span>#</span>
              JS-projects
            </p>
          </div>
          <div className="proCardSet">
            {JsProjectsData.map((proData) => (
              <ProjectCard proData={proData} key={proData.id} />
            ))}
          </div>
        </div>

        {/* UI clones projects list */}
        <div className="proPage">
          <div className="proSetHeads">
            <p>
              <span>#</span>
              UI-Clone Projects
            </p>
          </div>
          <div className="proCardSet">
            {UIClonesData.map((proData) => (
              <ProjectCard proData={proData} key={proData.id} />
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default ProjectsPage;
