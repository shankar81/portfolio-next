import React from "react";
import MetaHead from "../components/MetaHead/MetaHead";
import Projects from "../components/Projects/Projects";

type ProjectPageProps = {};

const ProjectPage: React.FC<ProjectPageProps> = ({}) => {
  return (
    <>
      <MetaHead
        url="https://shankar-sawant.vercel.app/projects"
        title="Shankar Sawant - Projects"
      />
      <Projects />
    </>
  );
};

export default ProjectPage;
