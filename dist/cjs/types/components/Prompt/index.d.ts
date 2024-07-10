import React from "react";
export interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
}
declare const Prompt: React.FC<ModalProps>;
export default Prompt;
