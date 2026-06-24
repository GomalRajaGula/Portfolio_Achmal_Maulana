"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { RevealProps } from "@/types/components";
import { THEME } from "@/constants/theme";

export function Reveal({ children, className, width = "fit-content", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { 
        duration: THEME.animation.duration.slow, 
        delay: delay, 
        ease: THEME.animation.easing.smooth 
      }
    },
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={direction === 'none' ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, delay } } } : variants}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
}
