import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import classes from "./Sidebar.module.css";

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
            src="/images/profile.jpg"
            height={1000}
            width={1000}
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
