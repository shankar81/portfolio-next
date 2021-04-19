import React from "react";
import Home from "../components/Home/Home";
import MetaHead from "./../components/MetaHead/MetaHead";

type Landing = {};

const Landing: React.FC<Landing> = ({}) => {
  return (
    <>
      <MetaHead
        url="https://shankar-sawant.vercel.app"
        title="Shankar Sawant - Portfolio"
      />
      <Home />
    </>
  );
};

export default Landing;
