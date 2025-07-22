import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollRevealCard = ({ children, delay = 0.1, duration = 0.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 70,
      filter: 'blur(3px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      // You can add an exit animation if needed when it scrolls out of view
      // whileInView="visible" // Alternative: animates when in view, re-animates on scroll
      // viewport={{ once: true, amount: 0.5 }} // Alternative: directly on motion component
      style={{ willChange: 'transform, opacity, filter' }} // Optimize performance
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealCard;