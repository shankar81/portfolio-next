import React from "react";
import Layout from "../components/Layout/Layout";
import classes from "../styles/contact.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import ContactForm from "../components/ContactForm/ContactForm";
import Button from "../components/Button/Button";

const Contact = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.top}>
          <IoLocationSharp className={classes.icon} />
          <h3 className={classes.heading}>Address</h3>
          <address className={classes.address}>
            B/8, Ganesh Sadan, Ashokvan, Shiv-Vallabh Road, Dahisar East, Mumbai
            - 400068
          </address>
        </div>
        <ContactForm />
        <div className={classes.button}>
          <Button label="Send" icon={() => <RiSendPlaneFill />} />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
