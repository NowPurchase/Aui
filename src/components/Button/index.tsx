import React from "react";
import "./style.scss";
import { Icons, iconMap } from "iconConstants";

export type Variants = "primary" | "secondary" | "outlined" | "text";
export type Direction = "ltr" | 'rtl' | "top-to-bottom" | "bottom-to-top";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variants;
  icon?: Icons;
  direction?: Direction
}

const Button: React.FC<Props> = ({
  children,
  icon,
  variant = "primary",
  className = "",
  direction = 'ltr',
  ...props
}) => {

  // Map the icon prop to a Remix icon class
  const getIconClass = () => {
    return iconMap[icon as Icons] || '';
  };


  return (
    <button
      data-variant={variant}
      className={`btn dir-${direction} ${className}`}
      {...props}
    >
      {icon && <i className={`${getIconClass()}`} />}
      {children}
    </button>
  );
};

export default Button;
