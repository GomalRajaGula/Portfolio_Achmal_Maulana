"use client";

import { motion } from "framer-motion";
import { DefaultProps } from "@/types/components";
import { FADE_IN } from "@/lib/animations";

export function PageWrapper({ children, className }: DefaultProps) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={FADE_IN}
      className={`min-h-screen bg-background flex flex-col w-full ${className || ''}`}
    >
      {children}
    </motion.main>
  );
}
