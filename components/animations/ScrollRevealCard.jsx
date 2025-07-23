import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ScrollRevealCard = ({ children, delay = 0.1, duration = 0.8 }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    amount: 0.5,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 70,
      filter: 'blur(3px)',
      transition: {
        duration,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="h-full"
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealCard;
