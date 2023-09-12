import React from "react";
import { ReactProjectsData } from "../../Data";
import ProjectCard from "../ProjectCard/ProjectCard";
import Line1 from "../../images/SVGs/Line1.svg";
import "./projectsec.css";

function ProjectSec() {
  return (
    <div className="projectParent">
      <section className="projectSec">
        <div className="projectHeadSec">
          <p className="projectHead">
            <span>#</span>
            projects
          </p>
          <img src={Line1} alt="" />
        </div>
        <div className="proCardSec">
          {ReactProjectsData.map((proData) => (
            <ProjectCard key={proData.id} proData={proData} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectSec;
