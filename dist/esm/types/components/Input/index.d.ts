import React from "react";
import "./style.scss";
export interface Props {
    value: string;
    label?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isError: boolean;
    errorTxt?: string;
    name?: string;
    required?: boolean;
}
declare const Input: ({ isError, placeholder, onChange, label, value, errorTxt, name, required, }: Props) => React.JSX.Element;
export default Input;
