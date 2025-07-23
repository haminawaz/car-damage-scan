import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const baseVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.8,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, delay, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // animate in both directions
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
};

export const SlideUp = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 50,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });

  const variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export const SlideDown = ({
  children,
  delay = 0,
  duration = 0.8,
  y = -50,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });

  const variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.8,
  scale = 0.8,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });

  const variants = {
    hidden: { opacity: 0, scale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export const FadeAndSlideRight = ({
  children,
  delay = 0,
  duration = 0.8,
  x = -50,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });

  const variants = {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export const FadeAndSlideLeft = ({
  children,
  delay = 0,
  duration = 0.8,
  x = 50,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });

  const variants = {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};
