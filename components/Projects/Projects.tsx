import React from "react";
import Project from "../Project/Project";
import Button from "./../Button/Button";
import classes from "./Projects.module.css";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div className={classes.button}>
        <Button label="View More" />
      </div>
    </div>
  );
};

export default Projects;
