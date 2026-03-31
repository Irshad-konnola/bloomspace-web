"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({ children, className = "", id = "" }) {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-32 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}