import React from "react";
import "./components.css";

function ProjectCard({ proData }) {
  return (
    <div className="proCard">
      <img src={proData.image} alt="" />
      <p className="techStack">{proData.techStack}</p>
      <div className="proDetails">
        <h2>{proData.title}</h2>
        <p>{proData.description}</p>
        <div className="proBtnSec">
          <button id="btn1">
            <a href={proData.liveLink} target="_">
              Live {"<~~>"}
            </a>
          </button>
          <button id="btn2">
            <a href={proData.srcLink} target="_">
              Github {"<~~>"}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
