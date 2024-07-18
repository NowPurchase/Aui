import React, { useState } from "react";
import { RiArrowUpSLine } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";

export interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  styles?: Record<"header" | "body", Record<string, string>>;
}

const Accordion = ({ title, children, styles }: Props) => {
  const [showChild, setShowChild] = useState<boolean>(false);
  const handleCollapse = () => {
    setShowChild(!showChild);
  };
  return (
    <div className="accordion-container">
      {/* ------- title -------  */}
      <div
        className="accordion-title-container"
        onClick={handleCollapse}
        style={styles?.header}
      >
        <div>{title}</div>
        <motion.div
          initial="collapsed"
          exit="collapsed"
          animate={{ rotate: showChild ? 180 : 0 }}
          className="accordion-button"
          transition={{ duration: 0.2 }}
        >
          <button onClick={handleCollapse}>
            <RiArrowUpSLine />
          </button>
        </motion.div>
      </div>

      {/* ----- children -------  */}
      <AnimatePresence>
        {showChild && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.3 }}
            className="container"
          >
            <div style={{ borderRadius: "0 0 4px 4px", ...styles?.body }}>
              {" "}
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
