import React from "react";
import "./style.scss";
export interface Props {
    value: string;
    label: string;
    placeholderText?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isError: boolean;
    errorTxt?: string;
}
declare const Input: ({ isError, placeholderText, onChange, label, value, errorTxt, }: Props) => React.JSX.Element;
export default Input;
