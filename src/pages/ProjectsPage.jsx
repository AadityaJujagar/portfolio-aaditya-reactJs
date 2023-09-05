import React from "react";
import ProjectCard from "../components/ProjectCard";
import { MajorProjectsData, MiniProjectsData } from "../Data";
import "./pages.css";

function ProjectsPage() {
  return (
    <div className="proPageParent">
      <section className="proPage">
        <div className="proPageHead">
          <p>
            <span>/</span>
            projects
          </p>
          <p>List of my projects</p>
        </div>

        {/* major-projects list */}
        <div className="proPage">
          <div className="proSetHeads">
            <p>
              <span>#</span>
              major-projects
            </p>
          </div>
          <div className="proCardSet">
            {MajorProjectsData.map((proData) => (
              <ProjectCard proData={proData} key={proData.id} />
            ))}
          </div>
        </div>

        {/* mini-projects list */}
        <div className="proPage">
          <div className="proSetHeads">
            <p>
              <span>#</span>
              mini-projects
            </p>
          </div>
          <div className="proCardSet">
            {MiniProjectsData.map((proData) => (
              <ProjectCard proData={proData} key={proData.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
