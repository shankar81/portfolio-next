import React, { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../FormInput/FormInput";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function onChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function onChangeNumber(e: ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }

  function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function onChangeMessage(e: ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  function onSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Contact Form</h1>
      <form onSubmit={onSubmitForm}>
        <div className={classes.formGroup}>
          <FormInput
            max={50}
            onChange={onChangeName}
            half
            placeholder="Enter Name"
            value={name}
          />
          <FormInput
            max={15}
            onChange={onChangeNumber}
            half
            placeholder="Enter Number"
            value={number}
          />
        </div>
        <FormInput
          max={50}
          value={email}
          onChange={onChangeEmail}
          placeholder="Enter Email"
        />
        <FormInput
          max={300}
          onChange={onChangeMessage}
          multiline
          value={message}
          placeholder="Enter Message"
        />
      </form>
    </div>
  );
};

export default ContactForm;
