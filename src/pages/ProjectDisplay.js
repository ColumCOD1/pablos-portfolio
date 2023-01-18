import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
import { IconButton } from "@material-ui/core";
import GithubIcon from "@material-ui/icons/GitHub";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt=""/>
      <p>
        <b>Skills:</b> {project.skills}
        <IconButton aria-label="EmailIcon" onClick={() => window.open('https://github.com/ColumCOD1')}>
          <GithubIcon fontSize="large" /> </IconButton>
      </p>
    </div>
  );
}

export default ProjectDisplay;