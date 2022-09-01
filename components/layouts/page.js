import { motion } from 'framer-motion';

export default function Page({ route, children }) {
  return (
    <motion.article
      exit={{ opacity: 0, x: -0, y: 20 }}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      key={route}
    >
      {children}
    </motion.article>
  );
}
