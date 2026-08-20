import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const directions = {
  up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  zoom: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

const Reveal = ({
  children,
  delay = 0,
  duration = 0.65,
  direction = 'up',
  className = '',
  once = true,
  scale = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-40px' });

  const variant = directions[direction] || directions.up;

  const initialStyle = scale
    ? { ...variant.initial, scale: 0.95 }
    : variant.initial;

  const animateStyle = isInView
    ? scale
      ? { ...variant.animate, scale: 1 }
      : variant.animate
    : initialStyle;

  return (
    <motion.div
      ref={ref}
      initial={initialStyle}
      animate={animateStyle}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic bezier easing
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

