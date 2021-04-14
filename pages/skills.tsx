import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import ProgressBar from "./../components/ProgressBar/ProgressBar";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  const [skills, setSkills] = useState([
    { title: "JavaScript", level: 0 },
    { title: "Java", level: 0 },
    { title: "Kotlin", level: 0 },
    { title: "SASS", level: 0 },
    { title: "React JS", level: 0 },
    { title: "React Native", level: 0 },
    { title: "Node JS", level: 0 },
  ]);

  useEffect(() => {
    // Dummy, Later fetch from API
    setTimeout(() => {
      setSkills([
        { title: "JavaScript", level: 80 },
        { title: "Java", level: 50 },
        { title: "Kotlin", level: 65 },
        { title: "SASS", level: 60 },
        { title: "React JS", level: 70 },
        { title: "React Native", level: 80 },
        { title: "Node JS", level: 60 },
      ]);
    }, 100);
  }, []);

  return (
    <Layout>
      {/* <div className={classes.container}> */}
      {skills.map((el, index) => {
        return <ProgressBar key={index} title={el.title} level={el.level} />;
      })}
      {/* </div> */}
    </Layout>
  );
};

export default Skills;
