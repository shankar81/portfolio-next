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
        I’m a soft­ware devel­op­er from Mumbai, India. Currently working on Web
        and Cross-Platoform application using JavaScript. This portfolio is
        developed using <span className={classes.highlight}>Next JS</span> for
        Front-End And <span className={classes.highlight}>Node JS</span> -{" "}
        <span className={classes.highlight}>Mongo DB</span> for Back-End.
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
