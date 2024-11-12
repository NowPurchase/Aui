import React from "react";
import "./style.scss";
export interface Props {
    value: string | number | undefined;
    label?: string;
    placeholder?: string;
    type?: "text" | "email" | "password" | "number";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    isError?: boolean;
    errorMsg?: string;
    name?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    style?: Record<"input" | "container", Record<string, string>>;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
}
declare const Input: ({ isError, placeholder, onChange, onBlur, onFocus, type, value, errorMsg, name, required, readOnly, disabled, prefix, suffix, style, ...props }: Props) => React.JSX.Element;
export default Input;
