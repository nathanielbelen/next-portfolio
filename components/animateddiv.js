import { motion } from 'framer-motion';

export default function AnimatedDiv({ children, delay = 0 }) {
  return (
    <motion.div
      className='p-3'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
