import { AppProps } from "next/app";
import React from "react";
import { IconContext } from "react-icons";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ color: "white", className: "icon" }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}

export default MyApp;
