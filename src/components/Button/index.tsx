import React from "react";
import "./style.scss";
import { Icons, iconMap } from "iconConstants";

export type Variants = "primary" | "secondary" | "outlined" | "text";
export type Direction = "ltr" | 'rtl' | "top-to-bottom" | "bottom-to-top";
export type Sizes = 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'; // Named font sizes
export type fontWeight = 'light' | 'normal' | 'semi-bold' | 'bold'; // Named font weights

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variants;
  icon?: Icons;
  direction?: Direction;
  size?: Sizes;
  weight?: fontWeight;
  text?: React.ReactNode;
  active?: Boolean
}

const Button: React.FC<Props> = ({
  children,
  icon,
  text = "",
  variant = "primary",
  className = "",
  direction = 'ltr',
  size = 'medium',  
  weight = 'light',
  active = false,
  ...props
}) => {

  // Map the icon prop to a Remix icon class
  const getIconClass = () => {
    return iconMap[icon as Icons] || '';
  };

    // Map fontSize to actual pixel value
    const fontSizeClass = size ? `font-size-${size}` : '';
    const fontWeightClass = weight ? `font-weight-${weight}` : '';


  return (
    <button
      data-variant={variant}
      data-active={active}
      className={`btn dir-${direction} aui-btn-${variant} ${fontSizeClass} ${fontWeightClass} ${className}`}
      {...props}
    >
      {icon && <i className={`${getIconClass()}`} />}
      {children || text}
    </button>
  );
};

export default Button;
