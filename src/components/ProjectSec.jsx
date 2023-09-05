import React from "react";
import { Link } from "react-router-dom";
import { MajorProjectsData } from "../Data";
import ProjectCard from "../components/ProjectCard";
import Line1 from "../images/SVGs/Line1.svg";
import "./components.css";

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
          <Link to="/projectspage">
            <button className="proViewAll">View all {"~~>"}</button>
          </Link>
        </div>
        <div className="proCardSec">
          {MajorProjectsData.map((proData) => (
            <ProjectCard key={proData.id} proData={proData} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectSec;
