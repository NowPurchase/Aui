import React from 'react';

type Variants = "primary" | "outlined" | "secondary" | "teriary2";
type ButtonTypes = "button" | "submit" | "reset";
interface Props$1 {
    children: React.ReactNode;
    variant?: Variants;
    disabled?: boolean;
    onClick: (e?: unknown) => void;
    type?: ButtonTypes;
}
declare const Button: React.FC<Props$1>;

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch?: () => void;
}
declare const SearchBar: React.FC<SearchBarProps>;

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    title: string;
}
declare const Prompt: React.FC<ModalProps>;

interface Props {
    value: string;
    label?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isError: boolean;
    errorTxt?: string;
    name?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
}
declare const Input: ({ isError, placeholder, onChange, label, value, errorTxt, name, required, readOnly, disabled, }: Props) => React.JSX.Element;

export { Button, Input, Prompt, SearchBar };
