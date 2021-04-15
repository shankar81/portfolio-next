import React, { ChangeEvent, FormEvent, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import FormInput from "../FormInput/FormInput";
import { validateEmail, validatePhone } from "./../../utils/helper";
import Button from "./../Button/Button";
import classes from "./ContactForm.module.css";

type ContactFormErrors = {
  name?: string;
  number?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<ContactFormErrors>({});

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

  function onSubmitForm(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    const err: ContactFormErrors = {};

    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(number);

    if (!isEmailValid) {
      err.email = "Please enter a valid email as: example@gmail.com";
    }

    if (!isPhoneValid) {
      err.number = "Please enter a valid phone number!";
    }

    if (name.length < 3) {
      err.name = "Name should be atleast 3 characters long!";
    }

    if (message.length < 10) {
      err.message = "Message should contain atleast 10 letters!";
    }

    // If no validation errors
    if (Object.keys(err).length === 0) {
      // Post the form details to API
    }

    setErrors(err);
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
            error={errors.name}
            placeholder="Enter Name"
            value={name}
          />
          <FormInput
            max={20}
            onChange={onChangeNumber}
            half
            error={errors.number}
            placeholder="Enter Number"
            value={number}
          />
        </div>
        <FormInput
          max={50}
          value={email}
          error={errors.email}
          onChange={onChangeEmail}
          placeholder="Enter Email"
        />
        <FormInput
          max={300}
          onChange={onChangeMessage}
          error={errors.message}
          multiline
          value={message}
          placeholder="Enter Message"
        />
        <Button
          onClick={onSubmitForm}
          label="Send"
          icon={() => <RiSendPlaneFill />}
        />
      </form>
    </div>
  );
};

export default ContactForm;
