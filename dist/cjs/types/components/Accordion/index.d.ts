import React from "react";
import "./style.scss";
export interface Props {
    title: React.ReactNode;
    children: React.ReactNode;
    styles?: Record<"header" | "body", Record<string, string>>;
}
declare const Accordion: ({ title, children, styles }: Props) => React.JSX.Element;
export default Accordion;
