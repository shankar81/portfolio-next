import classnames from "classnames";
import React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  icon?: () => any;
  label: string;
  type?: "PRIMARY" | "SECONDARY";
};
const Button: React.FC<ButtonProps> = ({ icon, label, type }) => {
  const containerClasses = [classes.container];

  if (type === "SECONDARY") {
    containerClasses.push(classes.secondaryContainer);
  }
  return (
    <div className={classnames(containerClasses)}>
      {icon && icon()}
      <p className={classes.label}>{label}</p>
    </div>
  );
};

export default Button;
