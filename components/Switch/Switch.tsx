import classnames from "classnames";
import React, { useContext } from "react";
import ThemeProvider from "../../contexts/ThemeProvider";
import classes from "./Switch.module.css";

const Switch: React.FC = () => {
  const { onToggleTheme, theme } = useContext(ThemeProvider);
  return (
    <div onClick={onToggleTheme} className={classes.container}>
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
