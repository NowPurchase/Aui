import React from "react";
import "./style.scss";
export type Variants = "primary" | "outlined" | "secondary" | "teriary2";
export interface Props {
    children: React.ReactNode;
    variant?: Variants;
    disabled?: boolean;
    onClick: (param: unknown) => void;
}
declare const Button: React.FC<Props>;
export default Button;
