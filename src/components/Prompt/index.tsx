import React, { useEffect } from "react";

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Prompt: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current?.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const backdropStyle =
    "fixed top-0 left-0  !w-screen !h-screen bg-[#00000080] flex-row justify-center items-center";
  const dialogContentStyle = "bg-white p-2 ";
  return (
    <div
      className={backdropStyle}
      ref={modalRef}
      style={{
        display: isOpen ? "flex" : "none",
      }}
    >
      <div className={dialogContentStyle}>zdvs</div>
    </div>
  );
};

export default Prompt;
