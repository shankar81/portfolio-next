import React from "react";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import Projects from "../components/Projects/Projects";

type ProjectPageProps = {};

const ProjectPage: React.FC<ProjectPageProps> = ({}) => {
  return (
    <Layout>
      <Projects />
      {/* <div className={classes.button}> */}
      <Button label="View More" />
      {/* </div> */}
    </Layout>
  );
};

export default ProjectPage;
