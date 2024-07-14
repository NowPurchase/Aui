import React from "react";
import "./style.scss";

export type Variants = "primary" | "outlined" | "secondary" | "teriary2";

export interface Props {
  children: React.ReactNode;
  variant?: Variants;
  disabled?: boolean;
  onClick: (param?: unknown) => void;
}

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
}) => {
  return (
    <button disabled={disabled} className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
