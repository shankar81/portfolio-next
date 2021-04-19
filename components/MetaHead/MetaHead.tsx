import React from "react";
import Head from "next/head";

type MetaHeadProps = {
  title?: string;
  url?: string;
};

const MetaHead: React.FC<MetaHeadProps> = ({
  title = "Shankar Sawant - Portfolio",
  url = "https://shankar-sawant.vercel.app/",
}) => {
  return (
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
        />
        <title>{title}</title>
        <meta property="og:title" content={title} />
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
        <meta property="og:url" content={url} />
      </>
    </Head>
  );
};

export default MetaHead;
