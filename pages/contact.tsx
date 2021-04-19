import React from "react";
import Contact from "../components/Contact/Contact";
import MetaHead from "./../components/MetaHead/MetaHead";

const ContactPage = () => {
  return (
    <>
      <MetaHead
        url="https://shankar-sawant.vercel.app/contact"
        title="Shankar Sawant - Contact"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
