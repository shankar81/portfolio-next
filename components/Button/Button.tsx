import classnames from "classnames";
import React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  icon?: () => any;
  label: string;
  type?: "PRIMARY" | "SECONDARY";
  href?: string;
  target?: string;
};
const Button: React.FC<ButtonProps> = ({ icon, label, type, href, target }) => {
  const containerClasses = [classes.container];

  if (type === "SECONDARY") {
    containerClasses.push(classes.secondaryContainer);
  }
  return (
    <a href={href} target="_blank" className={classnames(containerClasses)}>
      {icon && icon()}
      <p className={classes.label}>{label}</p>
    </a>
  );
};

export default Button;
