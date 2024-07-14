import React from "react";
import "./style.scss";

export interface Props {
  value: string;
  label: string;
  placeholderText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorTxt?: string;
}

const Input = ({
  isError,
  placeholderText,
  onChange,
  label,
  value,
  errorTxt,
}: Props) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleInput">{label}</label>
      <input
        value={value}
        type="text"
        id="exampleInput"
        className={isError ? "is-invalid" : ""}
        placeholder={placeholderText ?? ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
      {isError && <div className="error-message">{errorTxt ?? ""}</div>}
    </div>
  );
};

export default Input;
