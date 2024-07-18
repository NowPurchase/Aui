import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionProps = {
  question: string;
  answer: React.ReactNode;
};

const Accordion2: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        border: "1px solid black",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={toggleAccordion}
      >
        <span
          style={{
            fontSize: "clamp(18px, 2.8vw, 40px)",
            fontWeight: 700,
            maxWidth: "90%",
          }}
          //   className={"max-w-[90%] md:max-w-[80%]"}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            style={{
              width: "clamp(14px, 3vw, 37px)",
              height: "clamp(18px, 3vw, 48px)",
            }}
            width="37"
            height="48"
            viewBox="0 0 37 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.5 24L34.5215 42L2.47853 42L18.5 24Z" fill="white" />
            <path
              d="M18.5 3.21854e-06L34.5215 18L2.47853 18L18.5 3.21854e-06Z"
              fill="white"
            />
          </svg>
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.3 }}
            // className="overflow-hidden"
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                fontSize: "clamp(18px, 2.8vw, 36px)",
                lineHeight: 1.2,
                maxWidth: "80%",
                padding: "1rem",
              }}
              //   className="max-w-[90%] px-[10px] py-[15px] pt-0 font-light text-white md:mt-2 md:max-w-[80%] md:px-[30px] md:py-[40px] md:pt-0"

              //   style={{}}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion2;
