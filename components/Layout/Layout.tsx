import classnames from "classnames";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "../../contexts/ThemeProvider";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Layout.module.css";

type LayoutProps = {};

export type Theme = "light" | "dark";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const [theme, setTheme] = useState<Theme>("light");

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

  return (
    <ThemeProvider value={{ onToggleTheme: changeTheme, theme }}>
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
      </div>
    </ThemeProvider>
  );
};

export default Layout;
