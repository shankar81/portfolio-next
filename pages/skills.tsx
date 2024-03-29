import React, { useEffect, useState } from "react";
import ProgressBar from "./../components/ProgressBar/ProgressBar";
import MetaHead from "./../components/MetaHead/MetaHead";

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
    <div className="container">
      <MetaHead
        url="https://shankar-sawant.vercel.app/skills"
        title="Shankar Sawant - Skills"
      />
      {skills.map((el, index) => {
        return <ProgressBar key={index} title={el.title} level={el.level} />;
      })}
    </div>
  );
};

export default Skills;
