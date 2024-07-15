import React from "react";
import "./style.scss";
export interface Props {
    value: string;
    label?: string;
    placeholder?: string;
    type?: "text" | "email" | "password" | "number";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isError?: boolean;
    errorMsg?: string;
    name?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    prefix?: React.ReactNode | null;
    suffix?: React.ReactNode | null;
    inputStyles?: Record<string, string>;
}
declare const Input: ({ isError, placeholder, onChange, type, value, errorMsg, name, required, readOnly, disabled, prefix, suffix, inputStyles, }: Props) => React.JSX.Element;
export default Input;
