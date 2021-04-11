import Image from "next/image";
import React from "react";
import classes from "./Header.module.css";

const menus = [
  { label: "Home", active: true },
  { label: "Skills", active: false },
  { label: "Projects", active: false },
  { label: "Contact Us", active: false },
];
const Header = () => {
  return (
    <div className={classes.container}>
      <Image
        alt="Personal Portfolio"
        className={classes.image}
        src="/images/logo.svg"
        width={130}
        height={50}
      />
      <ul className={classes.list}>
        {menus.map((el, index) => {
          return (
            <li key={index} className={classes.item}>
              {el.label}
              <div className={classes.border} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
