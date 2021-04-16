import { useRouter } from "next/router";
import React from "react";
import { BsDownload } from "react-icons/bs";
import Button from "../Button/Button";
import classes from "./Home.module.css";

const Home = () => {
  const router = useRouter();

  function handleHireMe() {
    router.push("/contact");
  }

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
        <div className={classes.button}>
          <Button
            href="/Resume.pdf"
            target="_blank"
            label="Download CV"
            icon={() => <BsDownload />}
          />
        </div>
        <div className={classes.button}>
          <Button type="SECONDARY" onClick={handleHireMe} label="Hire Me" />
        </div>
      </div>
    </div>
  );
};

export default Home;
