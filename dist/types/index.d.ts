import React from 'react';

type Variants = "primary" | "outlined" | "secondary" | "teriary2";
interface Props$1 {
    children: React.ReactNode;
    variant?: Variants;
    disabled?: boolean;
    onClick: (param?: unknown) => void;
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
    label: string;
    placeholderText?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isError: boolean;
    errorTxt?: string;
}
declare const Input: ({ isError, placeholderText, onChange, label, value, errorTxt, }: Props) => React.JSX.Element;

export { Button, Input, Prompt, SearchBar };
