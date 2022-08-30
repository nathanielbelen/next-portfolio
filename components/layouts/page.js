import { motion } from 'framer-motion';

export default function Page({ key, children }) {
  return (
    <motion.article
      exit={{ opacity: 0, x: -0, y: 20 }}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      key={key}
    >
      {children}
    </motion.article>
  );
}
