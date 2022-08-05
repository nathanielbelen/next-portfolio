import Head from 'next/head';
import Heading from '../components/heading';
import About from '../components/aboutme';
import Works from '../components/works';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div className='p-3'>
      <Heading title='about me' id='about' />
      <About />
      <Heading title='works' id='works' />
      <Works />
      <Heading title='contact me' id='contact'/>
      <Contact />
    </div>
  );
}
