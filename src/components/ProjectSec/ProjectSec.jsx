import React from "react";
import { ReactMajorProjectsData } from "../../Data";
import ProjectCard from "../ProjectCard/ProjectCard";
import Line1 from "../../images/SVGs/Line1.svg";
import "./projectsec.css";
import { Link } from "react-router-dom";

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
          <Link style={{ textDecoration: "none" }} to="/projectspage">
            <p className="viewAllPro">
              View all <span>~~{">"}</span>
            </p>
          </Link>
        </div>
        <div className="proCardSec">
          {ReactMajorProjectsData.map((proData) => (
            <ProjectCard key={proData.id} proData={proData} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectSec;
