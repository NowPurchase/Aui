import React from "react";

export interface ModalProps {
  isOpen: boolean;
}

const Prompt: React.FC<ModalProps> = ({ isOpen }) => {
  //   const modalRef = useRef(null);
  const backdropStyle =
    "fixed top-0 left-0 !w-screen !h-screen bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center";
  const dialogContentStyle = "bg-white p-2  w-[50%]";
  return (
    <div
      className={backdropStyle}
      //   ref={modalRef}
      style={{ display: isOpen ? "inline-block" : "none", position: "fixed" }}
    >
      <div className={dialogContentStyle}>zdvs</div>
    </div>
  );
};

export default Prompt;
