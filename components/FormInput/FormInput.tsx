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
  error?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  onChange,
  multiline,
  half,
  max,
  error,
}) => {
  return (
    <div
      className={classnames(classes.container, {
        [classes.half]: half,
      })}
    >
      {!multiline ? (
        <input
          maxLength={max}
          type="text"
          className={classes.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          rows={5}
          maxLength={max}
          className={classnames(classes.input, classes.textarea)}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default FormInput;
