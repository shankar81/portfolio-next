import React from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";

type Landing = {};

const Landing: React.FC<Landing> = ({}) => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Landing;
