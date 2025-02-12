import React, { forwardRef } from "react";
import "./style.scss";
import { Icons, iconMap } from "../../iconConstants";

export type Variants =
  | "primary"
  | "secondary"
  | "outlined"
  | "tertiary"
  | "icon"
  | "text";
export type Direction = "ltr" | "rtl" | "top-to-bottom" | "bottom-to-top";
export type fontWeight = "light" | "normal" | "semi-bold" | "bold"; // Named font weights

// Define color variants
export type ColorVariants = "primary" | "secondary" | "success" | "error" | "warning";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variants;
  icon?: Icons;
  direction?: Direction;
  weight?: fontWeight;
  text?: React.ReactNode;
  active?: boolean;
  hasIcon?: boolean;
  loading?: boolean;
  loader?: React.ReactNode;
  colorVariant?: ColorVariants;
  fullWidth?: boolean
}

// Map color variants to actual CSS color values
const colorMap: Record<ColorVariants, string> = {
  primary: "#1579be",
  secondary: "#909090",
  success: "#2ba24c",
  error: "#e43e2b",
  warning: "#d58c00"
};

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
      weight = "normal",
      active = false,
      hasIcon = false,
      loading = false, // Default loading state
      loader, // Custom loader if provided
      colorVariant,
      fullWidth = false,
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

    // Map IconClass
    const iconClass = (icon || hasIcon) ? "btn-with-icon" : "";

    // Resolve color from colorMap if colorVariant is provided
    const resolvedColor = colorVariant && colorMap[colorVariant];

    const mergedStyle = {
      ...props.style, // Start with props.style to include any existing styles
      ...(resolvedColor && { color: resolvedColor }), // Override only if resolvedColor is truthy
      ...(fullWidth && { width: '100%' }), // Override only if fullWidth is true
    };

    return (
      <button
        ref={ref}
        data-variant={variant}
        data-active={active}
        data-color-variant={colorVariant}
        style={mergedStyle} // Inline style to apply the color
        disabled={loading || props.disabled}
        className={`btn dir-${direction} ${iconClass} aui-btn-${variant} ${fontWeightClass} ${className} ${
          loading ? "loading" : ""
        }`}
        {...props}
      >
        {loading ? (
          loader || <span className="default-loader" />
        ) : (
          <>
            {icon && <i className={`${getIconClass()}`} />}
            {children || text}
          </>
        )}
      </button>
    );
  }
);

export default Button;
