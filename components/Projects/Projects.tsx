import React from "react";
import Project from "../Project/Project";
import Button from "./../Button/Button";
import classes from "./Projects.module.css";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  const projects = [
    {
      title: "Beats Fitness Studio - React Native",
      images: [
        "/images/projects/beats/beats_cart.PNG",
        "/images/projects/beats/beats_events.PNG",
        "/images/projects/beats/beats_fitness.PNG",
        "/images/projects/beats/beats_hub.PNG",
        "/images/projects/beats/beats_store.PNG",
      ],
      link:
        "https://play.google.com/store/apps/details?id=com.beats_react_native",
    },
    {
      title: "Wings AAINA - React Native",
      images: [
        "/images/projects/wings/wings1.png",
        "/images/projects/wings/wings2.png",
        "/images/projects/wings/wings3.jpg",
        "/images/projects/wings/wings4.png",
        "/images/projects/wings/wings5.jpg",
      ],
      link: "https://play.google.com/store/apps/details?id=com.wingsudaan",
    },
    {
      title: "Tinder Clone - Kotlin",
      images: [
        "/images/projects/tinder/tinder1.jpg",
        "/images/projects/tinder/tinder2.jpg",
        "/images/projects/tinder/tinder3.jpg",
        "/images/projects/tinder/tinder4.jpg",
        "/images/projects/tinder/tinder5.jpg",
        "/images/projects/tinder/tinder6.jpg",
        "/images/projects/tinder/tinder7.jpg",
        "/images/projects/tinder/tinder8.jpg",
        "/images/projects/tinder/tinder9.jpg",
        "/images/projects/tinder/tinder10.jpg",
        "/images/projects/tinder/tinder11.jpg",
        "/images/projects/tinder/tinder12.jpg",
        "/images/projects/tinder/tinder13.jpg",
      ],
      link: "https://github.com/shankar81/Tinderr",
    },
    {
      title: "Alarm Manager - Kotlin",
      images: [
        "/images/projects/alarm/alarm1.png",
        "/images/projects/alarm/alarm2.png",
        "/images/projects/alarm/alarm3.png",
        "/images/projects/alarm/alarm4.png",
        "/images/projects/alarm/alarm5.png",
      ],
      link: "https://github.com/shankar81/AlarmManager",
    },
    {
      title: "Music Player - Kotlin",
      images: [
        "/images/projects/music/music1.png",
        "/images/projects/music/music2.png",
        "/images/projects/music/music3.png",
        "/images/projects/music/music4.png",
        "/images/projects/music/music5.png",
        "/images/projects/music/music6.png",
      ],
      link: "https://github.com/shankar81/music_player_kotlin",
    },
    {
      title: "News Application - Kotlin",
      images: [
        "/images/projects/news/news1.jpg",
        "/images/projects/news/news2.jpg",
        "/images/projects/news/news3.jpg",
        "/images/projects/news/news4.jpg",
        "/images/projects/news/news5.jpg",
      ],
      link: "https://github.com/shankar81/NewsApp",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        {projects.map((el, index) => {
          return <Project data={el} key={index} />;
        })}
      </div>
      <div className={classes.button}>
        <Button
          href="https://github.com/shankar81"
          target="__blank"
          label="View More"
        />
      </div>
    </div>
  );
};

export default Projects;
