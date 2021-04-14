import Image from "next/image";
import React from "react";
import classes from "./Project.module.css";

type ProjectProps = {};

const Project: React.FC<ProjectProps> = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <Image
          className={classes.image}
          width={1000}
          height={1000}
          src="/images/projects/project1.png"
        />
      </div>
      <h3 className={classes.title}>ideas project</h3>
    </div>
  );
};

export default Project;
