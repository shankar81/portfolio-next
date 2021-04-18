import Image from "next/image";
import React, { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import GlobalContext from "../../contexts/GlobalContext";
import Switch from "../Switch/Switch";
import classes from "./Sidebar.module.css";

type SidebarProps = {
  small: boolean;
};

const skills = [
  "JavaScript",
  "Java",
  "Kotlin",
  "SASS",
  "React JS",
  "React Native",
  "Node JS",
];
const Sidebar: React.FC<SidebarProps> = ({ small }) => {
  const { onToggleMenu } = useContext(GlobalContext);

  return (
    <div className={classes.container}>
      <ul className={classes.socials}>
        <div onClick={onToggleMenu} className={classes.menu}>
          <BiMenu size={25} />
        </div>
        <a
          target="__blank"
          href="https://github.com/shankar81"
          className={classes.socialIcon}
        >
          <FaGithub />
        </a>
        <a
          target="__blank"
          href="https://twitter.com/shankarswnt"
          className={classes.socialIcon}
        >
          <FaTwitter />
        </a>
        <a
          target="__blank"
          href="https://www.linkedin.com/in/shankar-sawant-577968149/"
          className={classes.socialIcon}
        >
          <FaLinkedinIn />
        </a>
      </ul>
      <div className={classes.content}>
        <div className={classes.imageContainer}>
          <Image
            alt="Shankar Sawant!"
            src="/images/profile.jpg"
            height={1000}
            width={1000}
            className={classes.image}
          />
        </div>

        {!small && (
          <div className={classes.skills}>
            {skills.map((el, index) => {
              let center = Math.round(skills.length / 2) - 1;
              let margin = index - center;

              if (center !== index && margin < 0) {
                margin = -margin;
              }
              return (
                <h4
                  key={index}
                  style={{ marginLeft: -(margin * 40) }}
                  className={classes.skill}
                >
                  {el}
                </h4>
              );
            })}
          </div>
        )}
      </div>

      <div className={classes.switch}>
        <Switch />
      </div>
    </div>
  );
};

export default Sidebar;
