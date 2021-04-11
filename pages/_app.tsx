import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    document.getElementsByTagName("body")[0].className = `theme-${theme}`;
  }, [theme]);

  function changeTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <IconContext.Provider value={{ color: "white", className: "icon" }}>
      <Component {...pageProps} changeTheme={changeTheme} />
    </IconContext.Provider>
  );
}

export default MyApp;
