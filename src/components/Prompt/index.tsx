import React, { useEffect, useRef } from "react";
import Success from "../../images/Success";
import "./style.scss";
import Button from "../Button";

export interface ModalProps {
  isOpen: boolean;
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
  onSuccess: () => void | undefined;
  cancellable?: boolean;
}

const Prompt: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  onSuccess,
  cancellable,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current?.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="backdrop"
      style={{
        display: isOpen ? "flex" : "none",
      }}
    >
      <div className="dialogContent" ref={modalRef}>
        {/* ------------- title -------------- */}
        <div>
          <div className="title_container">
            <div>
              <Success />
            </div>
            <div className="title">{title}</div>
          </div>
          {/* ---------- body ------------  */}
          <div className="body">{children}</div>
        </div>

        {/* ------------ footer -------------  */}
        <div className="footer">
          {cancellable && (
            <div className="btn_div">
              <Button onClick={onClose} variant="secondary">
                Cancel
              </Button>
            </div>
          )}
          <div className="btn_div">
            <Button onClick={onSuccess}>Success</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
