import React, { ChangeEventHandler } from "react";
import classes from "./FormInput.module.css";
import classnames from "classnames";

type FormInputProps = {
  placeholder: string;
  value: string;
  multiline?: boolean;
  half?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  max: number;
};

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  onChange,
  multiline,
  half,
  max,
}) => {
  return !multiline ? (
    <input
      maxLength={max}
      type="text"
      className={classnames(classes.input, {
        [classes.half]: half,
      })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  ) : (
    <textarea
      rows={5}
      maxLength={max}
      className={classnames(classes.input, classes.textarea, {
        [classes.half]: half,
      })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
