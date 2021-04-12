import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import classes from "./Sidebar.module.css";

const skills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React JS",
  "React Native",
  "Kotlin",
  "Java",
];
const Sidebar = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.socials}>
        <li className={classes.socialIcon}>
          <FaFacebookF />
        </li>
        <li className={classes.socialIcon}>
          <FaTwitter />
        </li>
        <li className={classes.socialIcon}>
          <FaLinkedinIn />
        </li>
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
      </div>
    </div>
  );
};

export default Sidebar;
