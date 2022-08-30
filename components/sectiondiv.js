import { motion } from 'framer-motion';

export default function SectionDiv({ children, delay }) {
  return (
    <motion.div
      className='p-3'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className='bg-white border rounded-xl drop-shadow-xl px-10 pt-6 pb-8'>
        {children}
      </div>
    </motion.div>
  );
}
