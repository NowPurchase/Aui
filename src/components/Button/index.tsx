import React from "react";
import "./style.scss";

export type Variants = "primary" | "outlined" | "secondary" | "teriary2";
export type ButtonTypes = "button" | "submit" | "reset";

export interface Props {
  children: React.ReactNode;
  variant?: Variants;
  disabled?: boolean;
  onClick: (e?: unknown) => void;
  type?: ButtonTypes;
  style?: Record<string, string>;
}

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type,
  style,
}) => {
  return (
    <button
      disabled={disabled}
      className={`btn ${variant}`}
      onClick={onClick}
      type={type ?? "button"}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
