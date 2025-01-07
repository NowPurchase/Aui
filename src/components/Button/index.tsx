import React, { forwardRef } from "react";
import "./style.scss";
import { Icons, iconMap } from "iconConstants";

export type Variants =
  | "primary"
  | "secondary"
  | "outlined"
  | "tertiary"
  | "icon"
  | "text";
export type Direction = "ltr" | "rtl" | "top-to-bottom" | "bottom-to-top";
export type fontWeight = "light" | "normal" | "semi-bold" | "bold"; // Named font weights

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variants;
  icon?: Icons;
  direction?: Direction;
  weight?: fontWeight;
  text?: React.ReactNode;
  active?: Boolean;
}

// Forward the ref to the underlying button element
const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      icon,
      text = "",
      variant = "primary",
      className = "",
      direction = "ltr",
      weight = "light",
      active = false,
      ...props
    },
    ref
  ) => {
    // Map the icon prop to a Remix icon class
    const getIconClass = () => {
      return iconMap[icon as Icons] || "";
    };

    // Map fontWeight to actual pixel value
    const fontWeightClass = weight ? `font-weight-${weight}` : "";

    return (
      <button
        ref={ref}
        data-variant={variant}
        data-active={active}
        className={`btn dir-${direction} ${icon && "btn-with-icon"} aui-btn-${variant} ${fontWeightClass} ${className}`}
        {...props}
      >
        {icon && <i className={`${getIconClass()}`} />}
        {children || text}
      </button>
    );
  }
);

export default Button;
