import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.24, 0.8, 0.25, 1] }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: [0.24, 0.8, 0.25, 1] }
  }
};

export const staggerChildren = (delay = 0.15): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: delay
    }
  }
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.24, 0.8, 0.25, 1] }
  }
};
