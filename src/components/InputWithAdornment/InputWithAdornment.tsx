import React, { useState } from "react";
import ".style.scss";

export interface Props {
  isError: boolean;
}

const InputWithAdornment = ({ isError }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`input-container ${isFocused ? "focused" : ""} ${
        isError ? "error" : ""
      }`}
    >
      <input
        type="text"
        defaultValue="600.00"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span className="unit">KG</span>
    </div>
  );
};

export default InputWithAdornment;
