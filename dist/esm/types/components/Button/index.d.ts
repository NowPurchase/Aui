import React from "react";
export type Variants = "default" | "outlined" | "tertiary1" | "teriary2" | "disabled";
export interface Props {
    children: React.ReactNode;
    variant?: Variants;
    disabled?: boolean;
    onClick: (param: unknown) => void;
}
declare const Button: React.FC<Props>;
export default Button;
