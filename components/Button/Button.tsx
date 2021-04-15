import classnames from "classnames";
import React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  icon?: () => any;
  label: string;
  type?: "PRIMARY" | "SECONDARY";
  href?: string;
  target?: string;
  onClick?: () => void;
};
const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  type,
  href,
  target,
  onClick,
}) => {
  const containerClasses = [classes.container];

  if (type === "SECONDARY") {
    containerClasses.push(classes.secondaryContainer);
  }
  return onClick && !href ? (
    <button onClick={onClick} className={classnames(containerClasses)}>
      {icon && icon()}
      <p className={classes.label}>{label}</p>
    </button>
  ) : (
    <a
      onClick={onClick}
      href={href}
      target={target}
      className={classnames(containerClasses)}
    >
      {icon && icon()}
      <p className={classes.label}>{label}</p>
    </a>
  );
};

export default Button;
