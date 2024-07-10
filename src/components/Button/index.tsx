import React from "react";

export type Variants =
  | "primary"
  | "outlined"
  | "secondary"
  | "teriary2"
  | "disabled";

export interface Props {
  children: React.ReactNode;
  variant?: Variants;
  disabled?: boolean;
  onClick: (param: unknown) => void;
}

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
}) => {
  const buttonStyle = () => {
    if (disabled) {
      return "bg-grey text-white cursor-not-allowed";
    }
    switch (variant) {
      case "primary":
        return "bg-blue-100 text-white cursor-pointer";
      case "outlined":
        return "bg-transparent text-blue-100 border border-blue-100 cursor-pointer";
      case "secondary":
        return "bg-blue-20 text-blue-100 border border-blue-100 cursor-pointer ";
      default:
        return "bg-blue-100 text-white cursor-pointer";
    }
  };

  return (
    <button
      disabled={disabled}
      className={`p-2 w-full rounded-normal ${buttonStyle()} font-medium `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
