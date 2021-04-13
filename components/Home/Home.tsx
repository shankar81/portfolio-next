import React from "react";
import { BsDownload } from "react-icons/bs";
import Button from "../Button/Button";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Shankar Sawant</h1>
      <h3 className={classes.role}>Frontend developer</h3>
      <p className={classes.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, at
        cupiditate optio nostrum quo repudiandae doloribus quidem ratione quas,
        placeat nam. Tempore voluptates blanditiis expedita sequi cum nam, ullam
        temporibus!
      </p>
      <div className={classes.buttons}>
        <Button label="Download CV" icon={() => <BsDownload />} />
        <Button type="SECONDARY" label="Hire Me" />
      </div>
    </div>
  );
};

export default Home;
