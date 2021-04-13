import classnames from "classnames";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./Header.module.css";

const menus = [
  { label: "Home", href: "/", active: true },
  { label: "Skills", href: "/skills", active: false },
  { label: "Projects", href: "/projects", active: false },
  { label: "Contact Us", href: "/contact", active: false },
];
const Header = () => {
  const router = useRouter();

  const path = router?.route;

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
            <Link key={index} href={el.href}>
              <li className={classes.item}>
                {el.label}
                <div
                  className={classnames(classes.border, {
                    [classes.showBorder]: path === el.href,
                  })}
                />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
