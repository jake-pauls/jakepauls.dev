import React from "react";
import { motion } from "framer-motion";

type FadeInProps = {
  children: JSX.Element | JSX.Element[];
};

export const FadeIn = ({ children }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.55 },
      }}>
      {children}
    </motion.div>
  );
};
