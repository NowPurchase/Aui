import React from "react";
import "./style.scss";

export interface Props {
  value: string;
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorTxt?: string;
  name?: string;
  required?: boolean;
}

const Input = ({
  isError,
  placeholder,
  onChange,
  label,
  value,
  errorTxt,
  name,
  required = false,
}: Props) => {
  return (
    <div className="form-group">
      {label && <label htmlFor="exampleInput">{label}</label>}
      <input
        required={required}
        value={value}
        name={name ?? undefined}
        type="text"
        id="exampleInput"
        className={isError ? "is-invalid" : ""}
        placeholder={placeholder ?? ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
      {isError && <div className="error-message">{errorTxt ?? ""}</div>}
    </div>
  );
};

export default Input;
