import React from 'react';

type Variants = "primary" | "outlined" | "secondary" | "teriary2";
type ButtonTypes = "button" | "submit" | "reset";
interface Props$2 {
    children: React.ReactNode;
    variant?: Variants;
    disabled?: boolean;
    onClick: (e?: unknown) => void;
    type?: ButtonTypes;
    style?: Record<string, string>;
}
declare const Button: React.FC<Props$2>;

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
}
declare const SearchBar: React.FC<SearchBarProps>;

interface ModalProps {
    isOpen: boolean;
    title: string;
    children?: React.ReactNode;
    onClose: () => void;
    onSuccess: () => void | undefined;
    cancellable?: boolean;
}
declare const Prompt: React.FC<ModalProps>;

interface Props$1 {
    value: string | number | undefined;
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
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    inputStyles?: Record<string, string>;
}
declare const Input: ({ isError, placeholder, onChange, type, value, errorMsg, name, required, readOnly, disabled, prefix, suffix, inputStyles, }: Props$1) => React.JSX.Element;

interface Props {
    title: React.ReactNode;
    children: React.ReactNode;
    styles?: Record<"header" | "body" | "container", Record<string, string>>;
}
declare const Accordion: ({ title, children, styles }: Props) => React.JSX.Element;

export { Accordion, Button, Input, Prompt, SearchBar };
