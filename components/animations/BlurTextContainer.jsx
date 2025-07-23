import React, { useRef, Children, cloneElement } from 'react';
import { motion, useInView } from 'framer-motion';

const BlurTextContainer = ({ children, delay = 0, stagger = 0.05, duration = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const characterVariants = {
    hidden: {
      opacity: 0,
      scale: 2, // Start slightly smaller
      filter: 'blur(4px)', // Slight blur
    },
    visible: {
      opacity: 1,
      scale: 1,     // Zoom to original size
      filter: 'blur(0px)',
      transition: {
        duration: duration,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const processText = (text, indexOffset = 0) => {
    if (!text || typeof text !== 'string') return text;
    const characters = text.split('');

    return characters.map((char, index) => (
      <motion.span
        key={`char-${indexOffset}-${index}`}
        variants={characterVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={indexOffset + index}
        style={{ display: 'inline-block', marginRight: char === ' ' ? '0.25em' : 0 }} // Keep spacing
      >
        {char}
      </motion.span>
    ));
  };

  const renderChildrenWithAnimation = (node, parentIndex = 0) => {
    if (typeof node === 'string') {
      return processText(node, parentIndex);
    }

    if (!node || typeof node !== 'object' || !node.props) {
      return node;
    }

    const newChildren = Children.map(node.props.children, (child, childIndex) => {
      if (typeof child === 'string') {
        return processText(child, parentIndex + childIndex);
      }
      if (React.isValidElement(child)) {
        return renderChildrenWithAnimation(child, parentIndex + childIndex);
      }
      return child;
    });

    return cloneElement(node, {}, newChildren);
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {renderChildrenWithAnimation(children)}
    </motion.div>
  );
};

export default BlurTextContainer;