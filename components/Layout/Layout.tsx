import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import classes from "./Layout.module.css";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    document.getElementsByTagName("body")[0].className = `theme-${theme}`;
  }, [theme]);

  function changeTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
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
          <meta property="og:image" content="/images/profile.jpg" />
          <meta
            property="og:url"
            content="https://shankar-sawant.vercel.app/"
          />
        </>
      </Head>
      <div className={classes.content}>
        <Header />
        {children}
      </div>
      <div className={classes.sidebar}>{/* <Sidebar small /> */}</div>
    </div>
  );
};

export default Layout;