import React, { useEffect, useRef } from "react";
import Success from "../../images/Success";

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
}

const Prompt: React.FC<ModalProps> = ({ isOpen, closeModal, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
  }, [isOpen, modalRef]);

  const backdropStyle =
    "fixed top-0 left-0  !w-screen !h-screen bg-[#00000080] flex-row justify-center items-center";
  const dialogContentStyle = "bg-white p-2 min-w-[500px] min-h-[200px] rounded";
  return (
    <div
      className={backdropStyle}
      ref={modalRef}
      style={{
        display: isOpen ? "flex" : "none",
      }}
    >
      <div className={dialogContentStyle}>
        {/* ------------- title -------------- */}
        <div className="flex flex-row justify-start gap-1 items-center">
          <div>
            <Success />
          </div>
          <div className="text-green-100 font-semibold text-xl">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
