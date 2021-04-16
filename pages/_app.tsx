import { AppProps } from "next/app";
import React from "react";
import { IconContext } from "react-icons";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ color: "white", className: "icon" }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconContext.Provider>
  );
}

export default MyApp;
