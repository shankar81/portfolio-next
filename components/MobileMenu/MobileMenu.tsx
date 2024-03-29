import classnames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { CgClose } from "react-icons/cg";
import GlobalContext from "../../contexts/GlobalContext";
import classes from "./MobileMenu.module.css";

const menus = [
  { label: "Home", href: "/", active: true },
  { label: "Skills", href: "/skills", active: false },
  { label: "Projects", href: "/projects", active: false },
  { label: "Contact Us", href: "/contact", active: false },
];

const MobileMenu = () => {
  const router = useRouter();

  const { isMenuOpen, onToggleMenu } = useContext(GlobalContext);

  const path = router?.route;

  function handleOnClick() {
    onToggleMenu();
    router.replace("/");
  }

  function handleNavigate(url: string) {
    onToggleMenu();
    router.replace(url);
  }

  return (
    <div
      className={classnames(classes.container, {
        [classes.hide]: !isMenuOpen,
      })}
    >
      <div onClick={onToggleMenu} className={classes.menu}>
        <CgClose size={25} />
      </div>
      <div onClick={handleOnClick} className={classes.brand}>
        <Image
          alt="Personal Portfolio"
          loading="lazy"
          src="/images/logo.svg"
          width={130}
          height={50}
        />
      </div>
      <ul className={classes.list}>
        {menus.map((el, index) => {
          return (
            <li
              onClick={() => handleNavigate(el.href)}
              key={index}
              className={classnames(classes.item, {
                [classes.active]: path === el.href,
              })}
            >
              {el.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
