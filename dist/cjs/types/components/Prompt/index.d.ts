import React from "react";
import "./style.scss";
export interface ModalProps {
    isOpen: boolean;
    title: string;
    children?: React.ReactNode;
    onClose: () => void;
    onSuccess: () => void | undefined;
    cancellable?: boolean;
}
declare const Prompt: React.FC<ModalProps>;
export default Prompt;
