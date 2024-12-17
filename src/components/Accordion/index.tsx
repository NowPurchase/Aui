import React, { useState } from "react";
// import { RiArrowDownSLine } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";

export interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  styles?: Record<"header" | "body" | "container", Record<string, string>>;
}

const Accordion = ({ title, children, styles }: Props) => {
  const [showChild, setShowChild] = useState<boolean>(false);
  const handleCollapse = () => {
    setShowChild(!showChild);
  };
  return (
    <div className="accordion-container" style={styles?.container}>
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
            --
            {/* <RiArrowDownSLine style={{ color: "#606060" }} /> */}
          </button>
        </motion.div>
      </div>

      {/* ----- children -------  */}
      <div>
        {showChild && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="container"
          >
            <div style={{ borderRadius: "0 0 4px 4px", ...styles?.body }}>
              {" "}
              {children}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
