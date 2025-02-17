import React from "react";
import "./style.scss";
import { Icons } from "../../iconConstants";
export type Variants = "primary" | "secondary" | "outlined" | "tertiary" | "icon" | "text";
export type Direction = "ltr" | "rtl" | "top-to-bottom" | "bottom-to-top";
export type fontWeight = "light" | "normal" | "semi-bold" | "bold";
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
    fullWidth?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export default Button;
