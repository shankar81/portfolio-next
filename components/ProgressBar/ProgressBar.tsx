import React from "react";
import classes from "./ProgressBar.module.css";
import classnames from "classnames";

type ProgressBarProps = {
  title: string;
  // Range
  level: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ level, title }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.progress}>
        <div className={classes.bar} />
        <div
          style={{
            width: `${level}%`,
          }}
          className={classnames([classes.bar, classes.fill])}
        />
        <div className={classnames([classes.checkpoint, classes.hidden])} />
        <div
          data-level="Beginner"
          className={classnames(classes.checkpoint, {
            [classes.fill]: level > 35,
          })}
        />
        <div
          data-level="Intermediate"
          className={classnames(classes.checkpoint, {
            [classes.fill]: level > 68,
          })}
        />
        <div
          data-level="Advance"
          className={classnames(classes.checkpoint, {
            [classes.fill]: level >= 100,
          })}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
