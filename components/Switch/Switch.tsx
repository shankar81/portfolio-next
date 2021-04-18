import classnames from "classnames";
import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import classes from "./Switch.module.css";

const Switch: React.FC = () => {

  const { onToggleTheme, theme } = useContext(ThemeContext);

  return (
    <div onClick={onToggleTheme} className={classes.container}>
      <span className={classes.icon}>🌜</span>
      <span className={classes.icon}>🌞</span>
      <div
        id="thumb"
        className={classnames(classes.thumb, {
          [classes.darkMode]: theme === "dark",
        })}
      />
    </div>
  );
};

export default Switch;
