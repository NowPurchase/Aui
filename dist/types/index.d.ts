import React from 'react';

type Variants = "primary" | "outlined" | "secondary" | "teriary2" | "disabled";
interface Props {
    children: React.ReactNode;
    variant?: Variants;
    disabled?: boolean;
    onClick: (param: unknown) => void;
}
declare const Button: React.FC<Props>;

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch?: () => void;
}
declare const SearchBar: React.FC<SearchBarProps>;

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
}
declare const Prompt: React.FC<ModalProps>;

export { Button, Prompt, SearchBar };
