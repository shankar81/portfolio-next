import classnames from "classnames";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GlobalProvider } from "../../contexts/GlobalContext";
import { ThemeProvider } from "../../contexts/ThemeContext";
import Header from "../Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Layout.module.css";

type LayoutProps = {};

export type Theme = "light" | "dark";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const [theme, setTheme] = useState<Theme>("light");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setUpTheme();
  }, []);

  useEffect(() => {
    document.getElementsByTagName("body")[0].className = `theme-${theme}`;
  }, [theme]);

  function setUpTheme() {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkTheme ? "dark" : "light");

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setTheme(e.matches ? "dark" : "light");
      });
  }

  function changeTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  function openMenu() {
    if (showMenu) {
      document.querySelector("body").style.overflowY = "scroll";
    } else {
      document.querySelector("body").style.overflowY = "hidden";
    }
    setShowMenu((open) => !open);
  }

  return (
    <ThemeProvider value={{ onToggleTheme: changeTheme, theme }}>
      <GlobalProvider value={{ isMenuOpen: showMenu, onToggleMenu: openMenu }}>
        <div className={classes.container}>
          <Head>
            <>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
                rel="stylesheet"
              />
              <meta
                name="description"
                content="Shankar Sawant - A developer - He/Him. Javascript Everywhere - FrontEnd Developer - Mobile / Website Developer."
              ></meta>
              <title>Shankar Sawant - Portfolio</title>
              <meta property="og:title" content="Shankar Sawant - Portfolio" />
              <meta
                property="og:description"
                content="Shankar Sawant - A developer - He/Him. Javascript Everywhere - FrontEnd Developer - Mobile / Website Developer."
              />
              <meta
                property="og:image"
                content={"https://shankar-sawant.vercel.app/images/profile.jpg"}
              />
              <meta
                property="image"
                content={"https://shankar-sawant.vercel.app/images/profile.jpg"}
              />
              <meta
                property="og:url"
                content="https://shankar-sawant.vercel.app/"
              />
            </>
          </Head>
          <div
            className={classnames(classes.content, {
              [classes.smallContent]: router?.route === "/",
            })}
          >
            <Header />
            {children}
          </div>
          <div
            className={classnames(classes.sidebar, {
              [classes.smallSideBar]: router?.route !== "/",
            })}
          >
            <Sidebar small={router?.route !== "/"} />
          </div>
          <MobileMenu />
        </div>
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default Layout;
