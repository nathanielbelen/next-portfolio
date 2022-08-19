import Head from 'next/head';
import Heading from '../components/heading';
import About from '../components/aboutme';
import Works from '../components/works';
import Contact from '../components/contact';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className='p-3'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Heading title='about me' id='about' />
      <About />
      <Heading title='works' id='works' />
      <Works />
      <Heading title='contact me' id='contact' />
      <Contact />
    </motion.div>
  );
}
