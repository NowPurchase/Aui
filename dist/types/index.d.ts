import React from 'react';

type Icons = "grid" | "list" | "phone" | "update" | "history" | "calender" | "upload" | "setting" | "dropdown-indicator" | "check" | "calculator" | "add" | "cancel" | "duplicate" | "edit" | "right-arrow" | 'warning' | 'print' | 'filter' | 'refresh' | 'left-arrow' | 'alert' | 'info' | 'download' | 'down-arrow' | 'delete';

type Variants = "primary" | "secondary" | "outlined" | "tertiary" | "icon" | "text";
type Direction = "ltr" | "rtl" | "top-to-bottom" | "bottom-to-top";
type fontWeight = "light" | "normal" | "semi-bold" | "bold";
type ColorVariants = "primary" | "secondary" | "success" | "error" | "warning";
interface Props$2 extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: Variants;
    icon?: Icons;
    direction?: Direction;
    weight?: fontWeight;
    text?: React.ReactNode;
    active?: boolean;
    hasIcon?: boolean;
    loading?: boolean;
    loader?: React.ReactNode;
    colorVariant?: ColorVariants;
    fullWidth?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<Props$2 & React.RefAttributes<HTMLButtonElement>>;

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
declare const Input: ({ isError, placeholder, onChange, onBlur, onFocus, type, value, errorMsg, name, required, readOnly, disabled, prefix, suffix, style, ...props }: Props$1) => React.JSX.Element;

interface Props {
    title: React.ReactNode;
    children: React.ReactNode;
    styles?: Record<"header" | "body" | "container", Record<string, string>>;
}
declare const Accordion: ({ title, children, styles }: Props) => React.JSX.Element;

export { Accordion, Button, Input, Prompt, SearchBar };
