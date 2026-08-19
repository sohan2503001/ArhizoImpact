import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: delay / 1000 }} // Convert ms to s
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
