import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import ContactForm from "./../ContactForm/ContactForm";
import classes from "./contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <IoLocationSharp className={classes.icon} />
        <h3 className={classes.heading}>Address</h3>
        <address className={classes.address}>
          B/8, Ganesh Sadan, Ashokvan, Shiv-Vallabh Road, Dahisar East, Mumbai -
          400068
        </address>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
