import React from "react";
export interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    title: string;
}
declare const Prompt: React.FC<ModalProps>;
export default Prompt;
