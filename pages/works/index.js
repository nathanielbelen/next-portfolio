import Heading from '../../components/heading';
import Works from '../../components/works';
import { motion } from 'framer-motion';

export default function MyWorks() {
  return (
    <motion.div
      className='p-3'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Heading title='works' />
      <Works />
    </motion.div>
  );
}
