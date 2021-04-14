import React from "react";
import Project from "../Project/Project";
import classes from "./Projects.module.css";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={classes.container}>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default Projects;
