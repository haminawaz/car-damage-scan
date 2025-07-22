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
  duration = baseVariants.visible.transition.duration,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    hidden: { ...baseVariants.hidden },
    visible: {
      ...baseVariants.visible,
      transition: { ...baseVariants.visible.transition, duration, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
};

export const SlideUp = ({
  children,
  delay = 0,
  duration = baseVariants.visible.transition.duration,
  y = 50,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    hidden: { ...baseVariants.hidden, y: y },
    visible: {
      ...baseVariants.visible,
      y: 0,
      transition: { ...baseVariants.visible.transition, duration, delay },
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
  duration = baseVariants.visible.transition.duration,
  y = -50,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    hidden: { ...baseVariants.hidden, y: y },
    visible: {
      ...baseVariants.visible,
      y: 0,
      transition: { ...baseVariants.visible.transition, duration, delay },
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
  duration = baseVariants.visible.transition.duration,
  scale = 0.8,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    hidden: { ...baseVariants.hidden, scale: scale },
    visible: {
      ...baseVariants.visible,
      scale: 1,
      transition: { ...baseVariants.visible.transition, duration, delay },
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
  duration = baseVariants.visible.transition.duration,
  x = -50,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    hidden: { ...baseVariants.hidden, x: x },
    visible: {
      ...baseVariants.visible,
      x: 0,
      transition: { ...baseVariants.visible.transition, duration, delay },
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
  duration = baseVariants.visible.transition.duration,
  x = 50,
  amount = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    hidden: { ...baseVariants.hidden, x: x },
    visible: {
      ...baseVariants.visible,
      x: 0,
      transition: { ...baseVariants.visible.transition, duration, delay },
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
