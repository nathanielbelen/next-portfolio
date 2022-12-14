import { motion } from 'framer-motion';

export default function Page({ children }) {
  return (
    <motion.div
      exit={{ opacity: 0, x: -0, y: 20 }}
      transition={{ duration: 0.4, type: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
