import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";

type HomePageProps = {};

const Landing: React.FC<HomePageProps> = ({}) => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Landing;
