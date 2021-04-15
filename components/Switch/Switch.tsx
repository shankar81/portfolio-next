import React from "react";
import { Theme } from "../Layout/Layout";
import classes from "./Switch.module.css";
import classnames from "classnames";

type SwitchPrps = {
  onChangeTheme: () => void;
  theme: Theme;
};

const Switch: React.FC<SwitchPrps> = ({ onChangeTheme, theme }) => {
  return (
    <div onClick={onChangeTheme} className={classes.container}>
      <span className={classes.icon}>🌜</span>
      <span className={classes.icon}>🌞</span>
      <div
        className={classnames(classes.thumb, {
          [classes.darkMode]: theme === "dark",
        })}
      />
    </div>
  );
};

export default Switch;
