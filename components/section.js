import { motion } from 'framer-motion';

export default function Section({ children, delay }) {
  return (
    <motion.section
      className='p-3'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className='bg-[#0000008f] rounded-xl drop-shadow-xl px-10 pt-6 pb-8'>
        {children}
      </div>
    </motion.section>
  );
}
