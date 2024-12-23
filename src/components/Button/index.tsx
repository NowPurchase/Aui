import React from "react";
import "./style.scss";

export type Variants = "primary" | "secondary" | "outlined" | "tertiary" | "regular" | "medium" | "semi-bold" | "bold";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variants;
}

const Button: React.FC<Props> = ({
  children,
  variant = "primary regular",
  className = "",
  ...props
}) => {
  return (
    <button
      data-variant={variant}
      className={`btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
