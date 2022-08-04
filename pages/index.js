import Head from 'next/head';
import Heading from '../components/heading';
import About from '../components/aboutme';
import Works from '../components/works';
import Work from '../components/work';
import Contact from '../components/contact';

export default function Home() {
  const works = [
    { title: 'Starkfront', description: 'ecommerce site', link: ''},
    { title: 'Apples-to-Oranges', description: 'social game night application' , link: ''},
    { title: 'Project Atelier Back-end', description: 'microservice oriented backend' , link: ''},
    { title: 'ouronlygameisroulette', description: 'roulette game' , link: ''},
  ];
  return (
    <div className='p-3'>
      <Heading title='about me' />
      <About />
      <Heading title='my projects' />
      <Works>
        {works.map(work => <Work info={work}/>)}
      </Works>
      <Heading title='contact me' />
      <Contact />
    </div>
  );
}
