import Head from 'next/head';
import Heading from '../components/heading';
import About from '../components/aboutme';
import Experiences from '../components/experiences';
import Works from '../components/works';
import Contact from '../components/contact';
import AnimatedDiv from '../components/animateddiv';
import SectionDiv from '../components/sectiondiv';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <SectionDiv>
        <Heading title='about me' id='about' />
        <About />
      </SectionDiv>
      <SectionDiv delay={0.5}>
        <Heading title='experience' id='experience' />
        <Experiences />
      </SectionDiv>
      <SectionDiv delay={1}>
        <Heading title='works' id='works' />
        <Works />
      </SectionDiv>
      <SectionDiv delay={1.5}>
        <Heading title='contact me' id='contact' />
        <Contact />
      </SectionDiv>
    </div>
  );
}
