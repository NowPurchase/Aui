import React, { useState } from "react";
import "./style.scss";

export interface Props {
  value: string | number | undefined;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorMsg?: string;
  name?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  style?: Record<"input" | "container", Record<string, string>>;
  props?: React.InputHTMLAttributes<HTMLInputElement>
}

const Input = ({
  isError,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  type = "text",
  value,
  errorMsg,
  name,
  required = false,
  readOnly = false,
  disabled = false,
  prefix,
  suffix,
  style,
  ...props
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    setIsFocused(false);
  };
  return (
    // <div className="form-group">
    //   {label && <label htmlFor="exampleInput">{label}</label>}
    //   <input#EEE
    //     disabled={disabled}
    //     readOnly={readOnly ?? undefined}
    //     required={required}
    //     value={value}
    //     name={name ?? undefined}
    //     type="text"
    //     id="exampleInput"
    //     className={`${isError ? "is-invalid" : ""}`}
    //     placeholder={placeholder ?? ""}
    //     onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
    //     onFocus={handleFocus}
    //     onBlur={handleBlur}
    //   />
    //   {isError && <div className="error-message">{errorTxt ?? ""}</div>}
    // </div>
    <div className="input-wrapper">
      <div
        className={`input-container ${isFocused ? "focused" : ""} ${
          isError ? "error" : ""
        } ${disabled ? "disabled" : ""}`}
        style={style?.container}
      >
        {prefix && <span>{prefix}</span>}
        <input
          type={type}
          disabled={disabled}
          readOnly={readOnly ?? undefined}
          required={required}
          value={value}
          name={name ?? undefined}
          id="exampleInput"
          className={`${isError ? "is-invalid" : ""}`}
          placeholder={placeholder ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={style?.input}
          pattern={type === "number" ? "[0-9]*" : ""}
          inputMode={type === "number" ? "decimal" : "text"}
          {...props}
        />
        {suffix && <span>{suffix}</span>}
      </div>
      {isError && <div className="error-message">{errorMsg}</div>}
    </div>
  );
};

export default Input;
