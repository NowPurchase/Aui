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
}
declare const Button: React.FC<Props>;
export default Button;
