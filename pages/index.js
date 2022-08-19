import Head from 'next/head';
import Heading from '../components/heading';
import About from '../components/aboutme';
import Works from '../components/works';
import Contact from '../components/contact';
import AnimatedDiv from '../components/animateddiv';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <AnimatedDiv>
        <Heading title='about me' id='about' />
        <About />
      </AnimatedDiv>
      <AnimatedDiv delay={0.5}>
        <Heading title='works' id='works' />
        <Works />
      </AnimatedDiv>
      <AnimatedDiv delay={1.0}>
        <Heading title='contact me' id='contact' />
        <Contact />
      </AnimatedDiv>
    </div>
  );
}
