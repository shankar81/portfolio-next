import Layout from "../components/Layout/Layout";
import Projects from "../components/Projects/Projects";

type ProjectPageProps = {};

const ProjectPage: React.FC<ProjectPageProps> = ({}) => {
  return (
    <Layout>
      <Projects />
    </Layout>
  );
};

export default ProjectPage;
