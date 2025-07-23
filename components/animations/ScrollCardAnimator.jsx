"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollCardAnimator({ children }) {
  const totalCards = children.length;
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={wrapperRef} style={{ height: `${totalCards * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {children.map((child, index) => {
          const start = index / totalCards;
          const end = (index + 1) / totalCards;

          const progress = useTransform(scrollYProgress, [start, end], [0, 1]);

          const y = useTransform(
            progress,
            index === 0 ? [0, 1] : [0, 1],
            index === 0 ? ["0%", "0%"] : ["100%", "0%"]
          );

          const opacity = useTransform(
            progress,
            index === 0 ? [0, 1] : [0, 0.5, 1],
            index === 0 ? [1, 1] : [0, 1, 1]
          );

          const scale = useTransform(progress, [0, 1], [0.8, 1]);

          return (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{
                y,
                opacity,
                scale,
                zIndex: totalCards + index,
              }}
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
