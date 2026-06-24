import { Variants } from "framer-motion";
import { THEME } from "@/constants/theme";

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: THEME.animation.duration.base,
      ease: THEME.animation.easing.smooth
    }
  }
};

export const SLIDE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: THEME.animation.duration.slow,
      ease: THEME.animation.easing.smooth
    }
  }
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};
